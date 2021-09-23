import {
  ActionType,
  ActionTypeName,
  EchoActionParameters
} from '@lotusengine/types'
import { EchoContructParameters } from '#constructs/src/types/common'
import { ExtendedSchema, echoActionSchema } from '@lotusengine/schemas'
import Action from '../base/actionComponent'

export default class EchoAction extends Action<
  EchoActionParameters,
  EchoContructParameters
> {
  type: ActionTypeName = ActionType.ECHO

  schema: ExtendedSchema = echoActionSchema
}
