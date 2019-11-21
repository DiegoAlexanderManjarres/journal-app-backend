import getUserId from '../../utils/get_userId'


const Entry = {     
    
    author: {
        fragment: 'fragment userId on User { id }',
        resolve(parent, args, { prisma, req }, info) {            
            const userId = getUserId(req, true)            
            return prisma.user({ id: userId }, info)
        }
    }
    
}


export { Entry as default }