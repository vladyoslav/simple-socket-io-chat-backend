import express from 'express'
import http from 'http'
import { Server, Socket } from 'socket.io'
import { port } from '../config'
import { disconnect, getMessages, newMessage } from '../handlers'
import { Handler } from './Handler'
import { context } from '../types'
import { Middleware } from './Middleware'
import { connection } from '../middlewares'

const app = express()
const server = http.createServer(app)
export const io = new Server(server, { cors: { origin: '*' } })

const middlewares: Middleware[] = [
  connection
]

const handlers: Handler[] = [
  newMessage,
  getMessages,
  disconnect
]

export class Api {
  async start (): Promise<http.Server> {

    middlewares.forEach(middleware =>
      io.use((socket: Socket, next) =>
        middleware.middleware(socket, next)
      )
    )

    io.on('connection', (socket: Socket) => {
      const context: context = {
        nickname: socket.handshake.query.nickname as string
      }

      handlers.forEach(handler =>
        socket.on(handler.trigger, (...args: any[]) =>
          handler.handler(context, ...args)
        )
      )
    })

    return server.listen(port)
  }
}
