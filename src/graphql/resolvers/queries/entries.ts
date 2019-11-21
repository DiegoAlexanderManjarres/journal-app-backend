import getUserId from '../../../utils/get_userId'
import { Entry } from '../../../generated/prisma-client'



const entries = (parent, args, { req, prisma }, info) => {
    const { skip, first, last, after, before } = args
    const userId = getUserId(req, true)
    return prisma.entries({ 
        where: { author: { id: userId } },
        orderBy: 'createdAt_DESC',
        skip,
        first: first || 3,
        last,
        after,
        before
    })    
}



export { entries } 