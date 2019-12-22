import * as Joi from '@hapi/joi'




const email = Joi.string()
    .trim()
    .email({ 
        minDomainSegments: 2, 
        tlds : { allow: ['com', 'net'] } 
    })
    .required()

/**
 * PASSWORD RULES
 * 
 * Must have at least one:
 * - digit
 * - Uppercase letter
 * - lowercase letter
 */
const PASSWORD_RULES = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,16})/
const password = Joi.string().trim().pattern(PASSWORD_RULES)    

const title = Joi.string().trim().min(1).max(300)
const text = Joi.string().trim().min(1).max(1024)


// user input schemas
const loginInputSchema = Joi.object({ 
    recaptcha: Joi.string().required(),
    email, 
    password 
})


const signupInputSchema = Joi.object({
    recaptcha: Joi.string().required(),
    name: Joi.string().min(3).max(60).required(),
    email,  
    password,
    repeat_password: Joi.ref('password')
})


// entries input schemas

const entryInputSchema = Joi.object({
    title: title.required(),
    text: text.required()
})

const entryEdit_InputSchema = Joi.object({ 
    title: title.allow(''), 
    text: title.allow('') 
})




/**
 * validateInputs(<inputs object>, <schema>) -> inputs 
 *  - functions takes on inputs object, and a defined schema that uses hapi/joi 
 *    to evaluate inputs.
 *    returns an new inputs object when constrains on schema are met 
 *    otherwise throws an error.
 */
const validateInputs = (inputs: object, schema) => {
    const { error, value } = schema.validate(inputs)
    if (error) { throw new Error(error) }  
    return value
} 


export {
    validateInputs,
    loginInputSchema,
    signupInputSchema,
    entryInputSchema,
    entryEdit_InputSchema
}