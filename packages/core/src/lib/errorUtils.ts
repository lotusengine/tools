import { ILotusError } from '../types/error'
import { LotusError } from './coreError'
import { UnknownError } from './systemErrors'

// Ensures LotusError from LotusError or Error
export const wrapError = (err: Error | ILotusError): LotusError => {
  // Check if LotusError
  if (err instanceof LotusError) return err

  return new UnknownError(err)
}
