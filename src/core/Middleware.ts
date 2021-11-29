
import { ExtendedError } from 'socket.io/dist/namespace'
import { Socket } from 'socket.io'

type middleware = (socket: Socket, next: (err?: (ExtendedError | undefined)) => void) => void

type MiddlewareProps = {
  middleware: middleware
}

export class Middleware {
  middleware: middleware

  constructor ({ middleware }: MiddlewareProps) {
    this.middleware = middleware
  }
}
