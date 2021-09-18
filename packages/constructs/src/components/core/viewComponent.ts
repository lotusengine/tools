import { ExtendedSchema, viewSchema } from '@lotusengine/schemas'
import { ViewStackModel } from 'types/src/types/view'
import BaseComponent from '../base/baseComponent'

export default class View extends BaseComponent {
  schema: ExtendedSchema = viewSchema
  label: string | undefined
  summary: string | undefined

  setLabel(label: string): this {
    this.label = label
    return this
  }

  getLabel(): string | undefined {
    return this.label
  }

  setSummary(summary: string): this {
    this.summary = summary
    return this
  }

  getSummary(): string | undefined {
    return this.summary
  }

  getData(): ViewStackModel {
    return {
      label: this.getLabel(),
      summary: this.getSummary()
    }
  }
}
