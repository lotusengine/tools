import S from 'fluent-json-schema'
import { commonKeySchema } from '../../utils/schemaUtils'
import {
  baseActionSchema,
  actionSchemaNextParameterSchema
} from '../../utils/schemaUtils'

export const validationSchema = S.object()
  .prop('type', S.const('event'))
  .prop(
    'parameters',
    S.object()
      .prop('payload', S.oneOf([S.object(), S.array(), S.string(), S.null()]))
      .prop('event', commonKeySchema)
      .prop('next', actionSchemaNextParameterSchema)
  )
  .extend(baseActionSchema)
