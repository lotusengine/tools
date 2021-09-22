import { LotusError } from '@lotusengine/core'

// Invalid stack config
export class InvalidStackConfigError extends LotusError {
  constructor(cause?: Error) {
    const message = 'No stack configuration found'
    super('INVALID_STACK_CONFIG_ERROR', 400, {}, message, cause)
  }
}
