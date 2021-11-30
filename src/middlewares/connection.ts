
import { Middleware } from '../core/Middleware'
import { Socket } from 'socket.io'
import { users } from '../store'
import { validateString } from '../utils'

export const connection = new Middleware({
  middleware: (socket: Socket, next) => {
    const nickname: string = socket.handshake.query.nickname as string
    const validatedNickname: string = validateString(nickname)

    if (!validatedNickname) return next(new Error('Невалидный никнейм, выберите другой!'))

    if (users.includes(validatedNickname)) return next(new Error('Этот никнейм уже занят, выберите другой!'))

    console.log(`user ${validatedNickname} connected`)

    users.push(validatedNickname)
    return next()
  }
})
