import { LotusError } from 'core/src/lib/coreError'

// Missing action parameters
export class ActionParameterError extends LotusError {
  constructor(cause?: Error) {
    const message = `Invalid or missing action parameters`
    super('PARAMETER_ERROR', 400, {}, message, cause)
  }
}

// No service defined for a stack
export class UndefinedStackServiceError extends LotusError {
  constructor(cause?: Error) {
    const message = `No service stack defined`
    super('UNDEFINEDSTACK_SERVICE_ERROR', 400, {}, message, cause)
  }
}
