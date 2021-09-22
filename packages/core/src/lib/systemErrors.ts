import { LotusError } from './coreError'

// Mainly used as a final wrap for standard errors if no LotusError present
export class UnknownError extends LotusError {
  constructor(cause?: Error) {
    const message = 'An unknown error has occurred'
    super('UNKNOWN_ERROR', 400, {}, message, cause)
  }
}

// Invalid data
export class InvalidDataError extends LotusError {
  constructor(cause?: Error) {
    const message = `Invalid data`
    super('INVALID_DATA_ERROR', 400, {}, message, cause)
  }
}
