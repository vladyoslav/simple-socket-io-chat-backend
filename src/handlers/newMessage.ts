
import { Handler } from '../core/Handler'

import { Message } from '../entities/Message'
import { getRepository, Repository } from 'typeorm'
import { context } from '../types'
import { io } from '../core/Api'
import { validateString } from '../utils'

export const newMessage = new Handler({
  trigger: 'new_message',
  handler: async (context: context, text: string, callback) => {
    const validatedText: string = validateString(text)
    if (!validatedText) return callback()

    const messages: Repository<Message> = getRepository(Message)

    const message: Message = messages.create({
      nickname: context.nickname,
      text: validatedText
    })

    // await messages.save(message)

    console.log(`${context.nickname}: ${validatedText}`)

    io.sockets.emit('new_message', message)

    return callback()
  }
})
