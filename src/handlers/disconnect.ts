import { Handler } from '../core/Handler'
import { context } from '../types'
import { users } from '../store'

export const disconnect = new Handler({
  trigger: 'disconnect',
  handler: (context: context) => {
    console.log(`user ${context.nickname} disconnected`)
    delete users[users.indexOf(context.nickname)]
  }
})
