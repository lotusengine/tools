import { ObjectHash, ISO8601DateTime, UUID, JSONData } from './common'
import { DynamicForm } from './form'

export interface ServiceParameters {
  [k: string]: string
}

export type ServiceSettings = DynamicForm

export type ServiceDomain = string

export interface ServiceStackData {
  deployedAt?: ISO8601DateTime
  hash: ObjectHash
}

export type ServiceModel = {
  id: UUID
  createdAt?: ISO8601DateTime
  updatedAt?: ISO8601DateTime
  label?: string
  summary?: string
  description?: string
  parameters?: ServiceParameters
  settings?: ServiceSettings
  domain?: ServiceDomain
}

export type ServiceStackModel = {
  label?: string
  summary?: string
  description?: string
  parameters?: ServiceParameters
  settings?: ServiceSettings
  domain?: ServiceDomain
}

export type ServiceUpsertInput = ServiceCreateInput | ServiceUpdateInput

export type ServiceStackInput = ServiceCreateInput

export type ServiceCreateInput = {
  label?: string
  summary?: string
  description?: string
  parameters?: JSONData
  settings?: JSONData
  domain?: ServiceDomain
}

export type ServiceUpdateInput = {
  id?: UUID
  label?: string
  summary?: string
  description?: string
  parameters?: JSONData
  settings?: JSONData
  domain?: ServiceDomain
}
