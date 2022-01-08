import hash from 'object-hash'
import Base from './baseComponent'

export default abstract class ServiceComponent extends Base {
  // name: string
  // schema: Json

  // Create hash from schema
  generateHash(): string {
    return hash(this.schema)
  }
}
