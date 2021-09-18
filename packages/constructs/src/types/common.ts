import {
  EchoActionParameters,
  RequestActionParameters,
  StartActionParameters
} from '@lotusengine/types'
import { SchemaObject } from 'ajv'
import { S, ObjectSchema, ArraySchema } from 'fluent-json-schema'
import BaseAction from '../components/base/actionComponent'

export interface EchoContructParameters
  extends Modify<EchoActionParameters, { next?: BaseAction<any, any> }> {}

export interface StartContructParameters
  extends Modify<StartActionParameters, { next?: BaseAction<any, any> }> {}

export interface RequestContructParameters
  extends Modify<RequestActionParameters, { next?: BaseAction<any, any> }> {}

// JSON fluent schema and standard AJV schema
export type JsonSchema = S | ObjectSchema | ArraySchema | SchemaObject

export type Modify<T, R> = Omit<T, keyof R> & R

export type ActionContructParameters =
  | StartContructParameters
  | EchoContructParameters
  | RequestContructParameters

export type ConstructActions = {}
