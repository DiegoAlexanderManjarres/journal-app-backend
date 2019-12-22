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

    const dataInputs = {}
    for (let input in inputs) {
        if (inputs[input]) { dataInputs[input] = inputs[input]}
    }
    
    // check on db if entry exist
    const entryExits = await prisma.$exists.entry({ 
        id: entryId, 
        author: { id: userId } 
    })
    if (!entryExits) { throw new Error('Unable to update entry') }

    return prisma.updateEntry({ data: dataInputs, where: { id: entryId } })
}


const deleteEntry = async (_: null, { entryId }, { req, prisma }) => {
    const userId = getUserId(req)

    const entryExits = await prisma.$exists.entry({ 
        id: entryId, 
        author: { id: userId } 
    })

    if (!entryExits) { throw new Error('Could not find entry') }

    const deletedEntry = await prisma.deleteEntry({ id: entryId })

    return  !!deletedEntry
}


export { addEntry, editEntry, deleteEntry }