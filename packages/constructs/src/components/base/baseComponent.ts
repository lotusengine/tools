import hash from 'object-hash'
import { validateData } from '../../lib/validatorUtils'
import { ExtendedSchema } from '@lotusengine/schemas'

export default abstract class Base {
  abstract schema: ExtendedSchema

  // Create hash from schema
  generateHash(): string {
    return hash(this.schema)
  }

  abstract getData(): unknown

  validateData<T extends unknown>(data: T): T {
    return validateData<T>(this.schema, data)
  }
}
