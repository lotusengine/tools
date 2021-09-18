import { ExtendedSchema, moduleSchema } from '@lotusengine/schemas'
import Base from '../base/baseComponent'

export default class Module extends Base {
  schema: ExtendedSchema = moduleSchema
  getData() {
    return {}
  }
}
