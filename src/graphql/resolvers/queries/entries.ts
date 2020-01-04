import getUserId from '../../../utils/get_userId'
import { Entry } from '../../../generated/prisma-client'



const entries = (parent, args, { req, prisma }, info) => {
    const { skip, first, last, after, before, entryId } = args
    const userId = getUserId(req, true)

    const _args = entryId 
        ? { where: { id: entryId, author: { id: userId } } }
        : { 
            where: { author: { id: userId } },
            orderBy: 'createdAt_DESC',
            skip,
            first: first || 5,
            last,
            after,
            before
        }

    return prisma.entries(_args)    
}



export { entries } 