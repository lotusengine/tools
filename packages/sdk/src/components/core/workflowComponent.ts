import { ExtendedSchema, workflowSchema } from '@lotusengine/schemas'
import { nanoid } from 'nanoid'
import { WorkflowDefinition, WorkflowStackModel } from '@lotusengine/types'
import Action from '../base/actionComponent'
import BaseComponent from '../base/baseComponent'

export const generateActionName = (step: Action) => {
  return `${step.getType()}${nanoid}`
}

export default class Workflow extends BaseComponent {
  protected steps: {
    [k: string]: Action
  } = {}

  schema: ExtendedSchema = workflowSchema
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

  addAction(step: Action): this {
    this.steps[step.getName()] = step
    return this
  }

  getData() {
    let definition: WorkflowDefinition = {}
    for (let action in this.steps) {
      definition[action] = this.steps[action].getData()
    }
    const data = {
      label: this.getLabel(),
      summary: this.getSummary(),
      definition: definition
    }
    return this.validateData<WorkflowStackModel>(data)
  }
}
