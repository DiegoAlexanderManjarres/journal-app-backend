import * as jwt from 'jsonwebtoken'



/**
 * getUserId(<context request object>, <Boolean>) -> <userId> or <null>
 * - function checks on the request object, headers for authorication field 
 *   or if there are any signed cookies. 
 *   If authorization or signed cookie is found it decodes its value and 
 *   then return it otherwise returns null 
 */
const getUserId = (req, authRequired: Boolean = true) => {    
    const token = req.request.headers.authorization 
        || req.request.signedCookies.access_token   
    
    if (token) {
        const decode = jwt.verify(token, process.env.TOKEN_SECRET) 
        return decode.userId
    }
    
    if (authRequired) { throw new Error("Unable to athenticate") }        
    
    return null
}


export { getUserId as default }