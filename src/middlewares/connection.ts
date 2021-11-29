
import { Middleware } from '../core/Middleware'
import { Socket } from 'socket.io'
import { users } from '../store'

export const connection = new Middleware({
  middleware: (socket: Socket, next) => {
    const nickname: string = socket.handshake.query.nickname as string

    if (users.includes(nickname)) return next(new Error('Этот никнейм уже занят, выберите другой!'))

    console.log(`user ${nickname} connected`)

    users.push(nickname)
    return next()
  }
})
