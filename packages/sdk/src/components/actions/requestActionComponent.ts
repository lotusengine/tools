import {
  ActionType,
  ActionTypeName,
  RequestActionParameters
} from '@lotusengine/types'
import { RequestContructParameters } from '#sdk/types/common'
import { ExtendedSchema, requestActionSchema } from '@lotusengine/schemas'
import BaseAction from '../base/actionComponent'

export default class RequestAction extends BaseAction<
  RequestActionParameters,
  RequestContructParameters
> {
  type: ActionTypeName = ActionType.REQUEST

  schema: ExtendedSchema = requestActionSchema
}
