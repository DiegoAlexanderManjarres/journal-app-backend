//import * as dotenv from 'dotenv'
//dotenv.config() 

import * as cookieParser from 'cookie-parser'
import * as helmet from 'helmet'
import * as compression from 'compression'

import server from './server'




const serverOptions = {
    port: process.env.PORT || 4000,
    cors: {
       credentials: true,
       origin: ["http://localhost:3000"] // frontend url
    }
}


const helmetOptions = {
    permittedCrossDomainPolicies: { permitedPolicies: 'none' },
    contentSecurityPolicy: {
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


const headersConfig = (req, res, next) => {
    res.header({ 'Access-Control-Allow-Methods': 'POST' })
    next()
}



                                    /* Middlewares */

// compression
server.express.use(compression())


// coockie perser middleware
server.express.use(cookieParser(process.env.COOKIE_SECTRET))


// allowed request methods
server.express.use(headersConfig)


// helmet middleware
server.express.use(helmet(helmetOptions))

                             /* start server */
server.start(serverOptions, () => {
    const port = process.env.PORT || '4000'
    console.log(`Server is running on port ${port}`)
})
