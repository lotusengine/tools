import {
  ActionType,
  ActionTypeName,
  StartActionParameters
} from '@lotusengine/types'
import { StartContructParameters } from '#sdk/types/common'
import { ExtendedSchema, startActionSchema } from '@lotusengine/schemas'
import BaseAction from '../base/actionComponent'

export default class StartAction extends BaseAction<
  StartActionParameters,
  StartContructParameters
> {
  type: ActionTypeName = ActionType.START

  schema: ExtendedSchema = startActionSchema
}
