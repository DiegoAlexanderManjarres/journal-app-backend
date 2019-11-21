import { User, Entry } from "../../../generated/prisma-client"
import getUserId from '../../../utils/get_userId'
import { 
    entryInputSchema,
    entryEdit_InputSchema,
    validateInputs,     
} from '../../../utils/validation/validation'



const addEntry = (_: null, { data }, { req, prisma }) => {
    const userId = getUserId(req)
    const inputs = validateInputs(data, entryInputSchema)

    return prisma.createEntry({ 
        ...inputs, 
        author: { connect: { id: userId } }
    })    
}


const editEntry = async (_: null, { data, entryId }, { req, prisma }) => {
    const userId = getUserId(req)

    // validate inputs
    const inputs = validateInputs(data, entryEdit_InputSchema)
    
    // check on db if entry exist
    const entryExits = await prisma.$exists.entry({ 
        id: entryId, 
        author: { id: userId } 
    })
    if (!entryExits) { throw new Error('Unable to update entry') }

    return prisma.updateEntry({ data, where: { id: entryId } })
}


const deleteEntry = async (_: null, { entryId }, { req, prisma }) => {
    const userId = getUserId(req) 
    const entryExits = await prisma.$exists.entry({ 
        id: entryId, 
        author: { id: userId } 
    })

    return entryExits ? !!prisma.deleteEntry({ id: entryId }) : false
}


export { addEntry, editEntry, deleteEntry }