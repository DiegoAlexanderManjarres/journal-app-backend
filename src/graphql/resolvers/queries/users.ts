import { User } from "../../../generated/prisma-client"




const hello = (_, { name }, { req, prisma }) => {
    const returnValue = `Hello ${name || 'World!'}`
    return returnValue
}


const users = async (_, args, { req, prisma }) => {
    const users: User[] = await prisma.users()
    return users
}



export { users, hello } 