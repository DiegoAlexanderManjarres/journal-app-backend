
import * as cookieParser from 'cookie-parser'
import * as helmet from 'helmet'
import * as compression from 'compression'

import server from './server'




const serverOptions = {
    port: process.env.PORT || 4000,
    cors: {
        credentials: true,
        origin: process.env.NODE_ENV !== 'production' 
            ? ["http://localhost:8000"] 
            : ["https://5e041404de051012534bc4f1--laughing-leakey-4fe784.netlify.com"]// frontend url
    }
}


const helmetOptions = {
    permittedCrossDomainPolicies: { permitedPolicies: 'none' },
    featurePolicy: {
        features: {
            documentWrite: ["'none'"],
            geolocation: ["'none'"],
            midi: ["'none'"],
            oversizedImages: ["'none'"],
            microphone: ["'none'"],
            payment: ["'none'"],
            syncXhr: ["'none'"],
            fullscreen: ["'self'"]
        }
    },
    contentSecurityPolicy: {
        // Need to look down csp for production
            // todo
        directives: {
            defaultSrc: [
                "'self'", 
                'https://fonts.googleapis.com/',
                'http://cdn.jsdelivr.net',
                'https://fonts.gstatic.com',                
            ],
            scriptSrc: [
                "'self'", 
                'https://fonts.googleapis.com/',
                'http://cdn.jsdelivr.net',
                'https://fonts.gstatic.com',
                "'unsafe-inline'"
            ],
            styleSrc: [
                "'self'", 
                'https://fonts.googleapis.com/',
                'http://cdn.jsdelivr.net',
                // 'https://fonts.gstatic.com',
                "'unsafe-inline'"
            ]
        }
    }
}


/** headers configuration middleware */
const headersConfig = (req, res, next) => {
    res.header({ 'Access-Control-Allow-Methods': 'POST' })
    next()
}


/** 
 * redirect to https when http at production stage 
 * must have express middleware set to 'trust proxy' true
 */
const redirect_to_https = (req, res, next) => {
    if (process.env.NODE_ENV === 'production' && !req.secure) {
        return res.redirect('https://' + req.get('host') + req.url)
    }    
    next()
}


                                    /* Middlewares */


// compression
server.express.use(compression())


// coockie perser middleware
server.express.use(cookieParser(process.env.COOKIE_SECRET))


// allowed http request methods
server.express.use(headersConfig)


// helmet middleware
server.express.use(helmet(helmetOptions))


// requre for redirect on not https
server.express.set('trust proxy', true)


// redirect to https when http at production stage
server.express.use(redirect_to_https)


                             /* start server */
server.start(serverOptions, () => {
    const port = process.env.PORT || '4000'
    console.log(`Server is running on port ${port}`)
})
