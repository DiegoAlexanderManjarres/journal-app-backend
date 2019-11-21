import { hashSync } from 'bcryptjs'


const passwordHash = (password: String) =>  hashSync(password, 12)


export { passwordHash as default }