import * as Joi from '@hapi/joi'




const email = Joi.string()
    .trim()
    .email({ 
        minDomainSegments: 2, 
        tlds : { allow: ['com', 'net'] } 
    })
    .required()


const password = Joi.string().trim().pattern(/^[a-zA-Z0-9]{3,30}$/)    

const title = Joi.string().trim().min(1).max(300)
const text = Joi.string().trim().min(1).max(1024)


// user input schemas
const loginInputSchema = Joi.object({ email, password })


const signupInputSchema = Joi.object({
    name: Joi.string().min(3).max(60).required(),
    email,  
    password,
    //repeat_password: Joi.ref('password')
})


// entries input schemas

const entryInputSchema = Joi.object({
    title: title.required(),
    text: text.required()
})

const entryEdit_InputSchema = Joi.object({ title, text })




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