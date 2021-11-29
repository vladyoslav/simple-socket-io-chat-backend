
import { Handler } from '../core/Handler'

import { Message } from '../entities/Message'
import { getRepository, Repository } from 'typeorm'
import { context } from '../types'
import { io } from '../core/Api'

export const newMessage = new Handler({
  trigger: 'new_message',
  handler: async (context: context, text: string, callback) => {
    const messages: Repository<Message> = getRepository(Message)

    const message: Message = messages.create({
      nickname: context.nickname,
      text
    })

    await messages.save(message)

    console.log(`${context.nickname}: ${text}`)

    io.sockets.emit('new_message', message)

    return callback()
  }
})
