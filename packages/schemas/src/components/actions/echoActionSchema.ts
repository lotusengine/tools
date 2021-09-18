import S from 'fluent-json-schema'
import {
  actionSchemaResultParameterSchema,
  actionSchemaOutputParameterSchema,
  actionSchemaNextParameterSchema,
  baseActionSchema
} from '../../utils/schemaUtils'

export const validationSchema = S.object()
  .prop('type', S.const('echo'))
  .prop(
    'parameters',
    S.object()
      .prop('payload', S.oneOf([S.object(), S.array(), S.string()]).required())
      .prop('result', actionSchemaResultParameterSchema)
      .prop('output', actionSchemaOutputParameterSchema)
      .prop('next', actionSchemaNextParameterSchema)
  )
  .extend(baseActionSchema)
