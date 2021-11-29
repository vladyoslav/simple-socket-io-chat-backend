
import { port } from './config'
import { Api } from './core/Api'
import 'reflect-metadata'
import { DB } from './utils'

const api: Api = new Api()
const db: DB = new DB()

api.start()
  .then(() => console.log(`Server is listening on port ${port}`))
  .catch(console.error)

db.start()
  .then(() => console.log('TypeORM has been successfully started'))
  .catch(console.error)
