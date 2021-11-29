import dotenv from 'dotenv'

dotenv.config()

const port = process.env.PORT
const postgreUri = process.env.POSTGRE_URI

export {
  port,
  postgreUri
}
