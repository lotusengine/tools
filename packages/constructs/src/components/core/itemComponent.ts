import { itemSchema, ExtendedSchema } from '@lotusengine/schemas'
import Base from '../base/baseComponent'

export default class Item extends Base {
  schema: ExtendedSchema = itemSchema
  getData() {
    return {}
  }
}
