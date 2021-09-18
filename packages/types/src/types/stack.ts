// import { ServiceStackInput, ServiceUpsertInput } from './service'
// import { ISO8601DateTime, ObjectHash, UUID } from './common'
// import { CollectionStackInput } from './collection'
// import { ViewStackInput } from './view'
// import { WorkflowStackInput } from './workflow'

import { CollectionStackInput, CollectionStackModel } from '..'

import { ServiceStackInput, ServiceStackModel } from './service'
import { ViewStackInput, ViewStackModel } from './view'
import { WorkflowStackInput, WorkflowStackModel } from './workflow'

export type StackInput = {
  service: {
    id: StackElementIdentifier
    data: ServiceStackInput
  }
  workflows: {
    id: StackElementIdentifier
    data: WorkflowStackInput
  }[]
  collections: {
    id: StackElementIdentifier
    data: CollectionStackInput
  }[]
  views: {
    id: StackElementIdentifier
    data: ViewStackInput
  }[]
}

// export type StackInitLanguage = 'typescript'

// export type StackInitParams = {
//   language: StackInitLanguage
//   targetDirectory: string
//   projectName: string
// }

// export type StackGenerateParams = {
//   projectPath: string
//   outputDirectory: string
// }

// export type StackTemplate = {
//   language: StackInitLanguage
// }

// export type StackProjectMeta = {
//   name: string
//   version: string
// }

export type StackElementIdentifier = string // These get turned into UUID internally

// export interface StackHashInput {
//   service: ObjectHash
//   workflows: ObjectHash[]
//   collections: ObjectHash[]
//   views: ObjectHash[]
// }

// export type StackElement = Record<StackElementIdentifier, ServiceUpsertInput>

export type StackModel = {
  service: {
    id: StackElementIdentifier
    data: ServiceStackModel
  }
  workflows: {
    id: StackElementIdentifier
    data: WorkflowStackModel
  }[]
  collections: {
    id: StackElementIdentifier
    data: CollectionStackModel
  }[]
  views: {
    id: StackElementIdentifier
    data: ViewStackModel
  }[]
}

// export type StackDestroyResult = any

// export interface StackDeployOptions {
//   force: boolean
// }

// export interface StackDeployResult {
//   service: UUID
//   workflows: UUID[]
//   collections: UUID[]
//   views: UUID[]
// }

// export interface StackDeployedParameters {
//   serviceId: UUID
//   deployedAt?: ISO8601DateTime
// }
