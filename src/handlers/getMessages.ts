
import { Handler } from '../core/Handler'
import { getRepository, Repository } from 'typeorm'
import { Message } from '../entities/Message'
import { context } from '../types'

export const getMessages = new Handler({
  trigger: 'get_messages',
  handler: async (context: context, callback) => {
    const messages: Repository<Message> = getRepository(Message)

    const allMessages = await messages.find()

    return callback(allMessages)
  }
})
