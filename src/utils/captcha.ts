import axios from 'axios'


/**
 * CaptchaCheck middleware 
 * 
 * suppose to contact the google api with api key and received token from client
 * to confirm user is not a bot
 * 
 * captchaCheck(<request object>, <recaptcha:string>)
 */
const captchaCheck = async ({ request }, recaptcha) => {
    // its suplse to contact the google api with given api key and token    
    try {
        const _response = await axios({
            method: 'post',
            url: 'https://www.google.com/recaptcha/api/siteverify',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            params: {
                secret: process.env.RECAPTCHA_SERVER_KEY,
                response: recaptcha,
                remoteip: request.connection.remoteAddress
            }        
        })
        console.log('response recaptcha', _response.data)    
        if (!_response.data.success) {
            throw new Error('You are a bot')
        }
        
    } catch (error) {
        throw new Error(error)
    }
    
}

export { captchaCheck as default }