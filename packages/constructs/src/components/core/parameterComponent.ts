import { ExtendedSchema, parameterSchema } from '@lotusengine/schemas'
import Base from '../base/baseComponent'

export default class Parameter extends Base {
  schema: ExtendedSchema = parameterSchema

  getData() {
    return {}
  }
}
