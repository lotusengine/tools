import { ISO8601DateTime, OptionsSchema, URL, UUID } from './common'
import { ModuleScope, Meta } from './graphql'

export type ModuleModel = {
  id: UUID
  updatedAt?: ISO8601DateTime
  createdAt?: ISO8601DateTime
  deployedAt?: ISO8601DateTime
  scope: ModuleScope
  label?: string
  summary?: string
  description?: string
  repository?: URL
  hash?: string // Commit hash
  meta?: Meta
  options?: OptionsSchema
  events?: ModuleEvents
}

// Custom error codes returned { some_event: 'Some description', ... }
export interface ModuleEvents {
  [key: string]: {
    description?: string
  }
}

export type ModuleUpsertInput = ModuleCreateInput | ModuleUpdateInput

export type ModuleCreateInput = {
  scope: ModuleScope
  label?: string
  summary?: string
  description?: string
  repository?: URL
  meta?: Meta
  options?: OptionsSchema
  events?: ModuleEvents
}

export type ModuleUpdateInput = {
  id: UUID
  scope?: ModuleScope
  label?: string
  summary?: string
  description?: string
  repository?: URL
  meta?: Meta
  options?: OptionsSchema
  events?: ModuleEvents
}

export type ModuleUpsertResult = void

export interface ModuleDeployParameters {
  moduleId: UUID
}
