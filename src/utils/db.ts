import { join } from 'path'
import { Connection, ConnectionOptions, createConnection } from 'typeorm'
import { postgreUri } from '../config'

const connectionOptions: ConnectionOptions = {
  type: 'postgres',
  url: postgreUri,
  entities: [join(__dirname, '../entities/**/*.{js,ts}')],
  synchronize: true
}

export class DB {
  start (): Promise<Connection> {
    return createConnection(connectionOptions)
  }
}
