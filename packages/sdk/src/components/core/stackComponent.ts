import { ExtendedSchema, stackSchema } from '@lotusengine/schemas'
import { StackModel } from '@lotusengine/types'
import { UndefinedStackServiceError } from 'sdk/src/system/systemErrors'

import { Collection, Service, View, Workflow } from '..'
import Base from '../base/baseComponent'

export default class Stack extends Base {
  schema: ExtendedSchema = stackSchema
  stack: {
    service?: { key: string; component: Service }
    workflows: { key: string; component: Workflow }[]
    collections: { key: string; component: Collection }[]
    views: { key: string; component: View }[]
  } = { workflows: [], collections: [], views: [] }

  setService(component: Service, key: string): this {
    this.stack.service = { key, component }
    return this
  }

  addWorkflow(component: Workflow, key: string): this {
    this.stack.workflows.push({ key, component })
    return this
  }

  addCollection(component: Collection, key: string): this {
    this.stack.collections.push({ key, component })
    return this
  }

  addView(component: View, key: string): this {
    this.stack.views.push({ key, component })
    return this
  }

  getData() {
    const { service, workflows, collections, views } = this.stack

    if (!service) throw new UndefinedStackServiceError()

    const { key, component } = service

    let stack: StackModel = {
      service: {
        id: key,
        data: component.getData()
      },
      workflows: [],
      collections: [],
      views: []
    }

    for (let { component, key } of workflows)
      stack.workflows.push({ id: key, data: component.getData() })

    for (let { component, key } of collections)
      stack.collections.push({ id: key, data: component.getData() })

    for (let { component, key } of views)
      stack.views.push({ id: key, data: component.getData() })

    return stack
  }
}
