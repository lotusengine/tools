import {
  EchoActionParameters,
  RequestActionParameters,
  StartActionParameters
} from '@lotusengine/types'
import BaseAction from '../components/base/actionComponent'

export interface EchoContructParameters
  extends Modify<EchoActionParameters, { next?: BaseAction<any, any> }> {}

export interface StartContructParameters
  extends Modify<StartActionParameters, { next?: BaseAction<any, any> }> {}

export interface RequestContructParameters
  extends Modify<RequestActionParameters, { next?: BaseAction<any, any> }> {}

export type Modify<T, R> = Omit<T, keyof R> & R

export type ActionContructParameters =
  | StartContructParameters
  | EchoContructParameters
  | RequestContructParameters

export type ConstructActions = {}
