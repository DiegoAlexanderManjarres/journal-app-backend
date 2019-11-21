import { compare } from 'bcryptjs'
import * as jwt from 'jsonwebtoken'

import { User } from "../../../generated/prisma-client"
import passwordHash from '../../../utils/password_hash'
import { 
    validateInputs, 
    loginInputSchema,
    signupInputSchema
} from '../../../utils/validation/validation'



/**
 * Funtions that updates database with logint attemp fail and time 
 * then throws an error with given message
 */
const log_login_fails = async (
    user: User , 
    prismaClient, 
    message: string = 'Unable to authenticate user'
    ) => {  
    await prismaClient.updateUser({ 
        data: {
            login_fail: user.login_fail + 1,
            last_login: new Date().toISOString()
        }, 
        where: { 
            id: user.id 
        }
    }) 

    throw new Error(message)    
}


/**
 * takes the context request object an a token 
 */
const setCookie = (req, token: string): void => {    
    const options = { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === 'production', 
        signed: true 
    }
    req.response.cookie('access_token', token, options)
}



/*                        resolvers                                  */

// createUser 
const createUser = async (_: null, { data }, { req, prisma }) => {
    // validate input data
    const inputs = validateInputs(data, signupInputSchema)   

    // encrypt passord
    const password = passwordHash(inputs.password)
    if (!password) { throw new Error("Unable to create account") }

    // create user on database
    const user: User = await prisma.createUser({
        ...inputs,
        password,
        isConfirmed: false,
        login_fail: 0,
        last_login: new Date(),
    })

    // create a token
        // todo

    // send email to user with a token that expires as a link to confirm 
        // todo   
    return { user, token: "token" }
}



// user login 
const login = async (_: null, { data }, { req, prisma }) => {
    
    // validate input data
    const inputs = validateInputs(data, loginInputSchema)      
    
    // clear cookie
    req.response.clearCookie('access_token')

    // retreave user from data base
    const user: User = await prisma.user({ email: inputs.email })
    if (!user) { throw new Error("Unable to authenticate") }

    /**
     * if login fails is greater than 2 and the difference between
     * last fail_login attempt to current time is  less than 30 min.
     * - then:
     *     update user data base with current loging attempt  time
     *     and add another fail attempt
     *     throw an error letting the user know, to try to log in again in 
     *     30 min  
     */
    if (user.login_fail > 2) {
        const fromLastLoginAttemp = +new Date() - +new Date(user.last_login)
        const message = `
            Maximun logins attempts exeeded, please try again in 2 minutes
            `

        // timeout in milliseconds -> is (milisecons * seconds) * minutes
        const timeout = (1000 * 60) * 2  

        if (fromLastLoginAttemp < timeout) {
            await log_login_fails(user, prisma, message)
        }
    }

    // compare given password with data base hash password
    const isPassword = await compare(inputs.password, user.password)  
    
    /**
     * If password does not match then update user database with a log of  
     * of the fail login, and the time it was attempted
     * then throw an error
     */
    if (!isPassword) { 
        await log_login_fails(user, prisma) 
    } 

    /**
     * if login fail is grater than 0 
     * - then update login fail to 0 
     */
    await prisma.updateUser({ 
        data: { login_fail: 0 }, 
        where: { id: user.id }
    }) 

    // create a token with user id
    const token = jwt.sign({ userId: user.id }, process.env.TOKEN_SECRET)

    // set-coockie
    setCookie(req, token)
    return { user, token }
}



// logout
const logout = (parent, args, { req, prisma }) => {
    req.response.clearCookie('access_token')
    return true
}

export { createUser, login, logout }
