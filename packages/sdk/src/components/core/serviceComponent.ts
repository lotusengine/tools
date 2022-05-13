import { ExtendedSchema, serviceSchema } from '@lotusengine/schemas'
import Base from '../base/baseComponent'
import {
  ServiceSettings,
  ServiceParameters,
  ServiceStackModel
} from '@lotusengine/types'

// import Collection from './collectionComponent'
// import View from './viewComponent'
// import Workflow from './workflowComponent'

export default class Service extends Base {
  schema: ExtendedSchema = serviceSchema

  // name: string
  // constructor(name: string) {
  //   // this.name = name
  // }

  label: string | undefined
  summary: string | undefined
  description: string | undefined
  parameters: ServiceParameters = {}
  settings: ServiceSettings = []

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

  setDescription(description: string): this {
    this.description = description
    return this
  }

  getDescription(): string | undefined {
    return this.description
  }

  setParameters(parameters: ServiceParameters): this {
    this.parameters = parameters
    return this
  }

  getParameters(): ServiceParameters | undefined {
    return this.parameters
  }

  setSettings(settings: ServiceSettings): this {
    this.settings = settings
    return this
  }

  getSettings(): ServiceSettings | undefined {
    return this.settings
  }

  getData(): ServiceStackModel {
    return {
      label: this.getLabel(),
      summary: this.getSummary(),
      description: this.getDescription(),
      parameters: this.getParameters(),
      settings: this.getSettings()
    }
  }
}
