import { User } from "../../../generated/prisma-client"
import getUserId from '../../../utils/get_userId'




const hello = (_, { name }, { req, prisma }) => {
    const returnValue = `Hello ${name || 'World!'}`
    return returnValue
}


const users = async (_, args, { req, prisma }) => {
    const users: User[] = await prisma.users()
    return users
}


const isLoggedIn = (_, args, { req, prisma }) => {
    const _isLogged = getUserId(req, false)
    console.log('is it logged???????????', _isLogged)
    return !!_isLogged
}

export { users, hello, isLoggedIn } 