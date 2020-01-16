import { User } from "../../../generated/prisma-client"
import getUserId from '../../../utils/get_userId'



const isLoggedIn = (_, args, { req, prisma }) => {
    const _isLogged = getUserId(req, false)
    console.log('is User logged?:', !!_isLogged)
    return !!_isLogged
}

export { isLoggedIn } 