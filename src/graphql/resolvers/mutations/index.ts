import { createUser, login, logout } from './user'
import { addEntry, editEntry, deleteEntry } from './entries'


const Mutation = {
    createUser,
    login,
    logout,
    addEntry,
    editEntry,
    deleteEntry
}


export { Mutation as default }