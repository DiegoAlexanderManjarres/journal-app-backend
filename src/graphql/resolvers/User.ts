import getUserId from '../../utils/get_userId'

// locking down some of the user table fields
const User = {    
    
    
    email: {
        fragment: 'fragment userId on User { id }',
        resolve: (parent, args, { req, prisma }, info) => {
            const userId = getUserId(req, false)
            return userId && userId === parent.id ? parent.email: null
        }
    },  
    

    password: {
        fragment: 'fragment userId on User { id }',
        resolve: (parent, args, { req, prisma }, info) => {
            const userId = getUserId(req, false)
            return null//userId && userId === parent.id ? parent.password: null
        }
    },  


    entries: {
        fragment: 'fragment userId on User { id }',
        resolve(parent, args, { prisma, req }, info) {
            const userId = getUserId(req, false)

            if (parent.id === userId) {
                return prisma.entries({
                    where: { author: { id: userId } },
                    orderBy: 'createdAt_DESC',
                    first: 5
                }, info)
            }

            return []
        }
    }


}


export { User as default }