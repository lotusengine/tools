import S from 'fluent-json-schema'
import {
  baseActionSchema,
  actionSchemaNextParameterSchema
} from '../../utils/schemaUtils'

export const validationSchema = S.object()
  .prop('type', S.const('token'))
  .prop(
    'parameters',
    S.object()
      .prop('keys', S.array().items(S.string()).required())
      .prop('next', actionSchemaNextParameterSchema)
  )
  .extend(baseActionSchema)
