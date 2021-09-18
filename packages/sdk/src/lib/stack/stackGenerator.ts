import {
  CollectionStackInput,
  CollectionStackModel,
  ServiceStackInput,
  ServiceStackModel,
  StackInput,
  StackModel,
  ViewStackInput,
  ViewStackModel,
  WorkflowStackInput,
  WorkflowStackModel
} from '@lotusengine/types'

import { outputJson, readJson } from 'fs-extra'
import { resolve } from 'path'
import { StackPrepareOptions } from 'sdk/src/types/stack'
import { stringifyData } from '../utils/dataUtils'

export const STACK_NAME = 'stack.json'
export const STACK_PATH = '.lotus'

// Accepts a stack input and writes it to output dir for deploy
export const prepareStack = async (
  stack: StackModel,
  options?: StackPrepareOptions
) => {
  const output = options?.output || STACK_PATH
  await outputJson(resolve(output, STACK_NAME), prepareStackData(stack))
}

// Prepare stack data for deploy
export const prepareStackData = (input: StackModel): StackInput => {
  const { service, workflows, collections, views } = input
  const { id, data } = service

  return {
    service: {
      id,
      data: prepareServiceData(data)
    },
    workflows: workflows.map(({ id, data }) => ({
      id,
      data: prepareWorkflowData(data)
    })),
    collections: collections.map(({ id, data }) => ({
      id,
      data: prepareCollectionData(data)
    })),
    views: views.map(({ id, data }) => ({
      id,
      data: prepareViewData(data)
    }))
  }
}

// Stringify necessary workflow props
export const prepareWorkflowData = (
  workflow: WorkflowStackModel
): WorkflowStackInput => {
  return stringifyData(workflow, ['definition'])
}

// Stringify necessary collection props
export const prepareCollectionData = (
  collection: CollectionStackModel
): CollectionStackInput => {
  return stringifyData(collection, [
    'mapping',
    'triggers',
    'options',
    'queries'
  ])
}

// Stringify necessary view props
export const prepareViewData = (view: ViewStackModel): ViewStackInput => {
  return stringifyData(view)
}

// Stringify necessary service props
export const prepareServiceData = (
  service: ServiceStackModel
): ServiceStackInput => {
  return stringifyData(service, ['settings', 'definition'])
}

// Read stack data from build file
export const loadStackData = async (options?: StackPrepareOptions) => {
  const output = options?.output || STACK_PATH
  return await readJson(resolve(output, STACK_NAME))
}
