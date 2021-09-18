import S from 'fluent-json-schema'
import {
  actionSchemaResultParameterSchema,
  actionSchemaOutputParameterSchema,
  actionSchemaNextParameterSchema,
  baseActionSchema
} from '../../utils/schemaUtils'

export const validationSchema = S.object()
  .prop('type', S.const('transform'))
  .prop(
    'parameters',
    S.object()
      .prop('next', actionSchemaNextParameterSchema)
      .prop('result', actionSchemaResultParameterSchema)
      .prop('output', actionSchemaOutputParameterSchema)
      .prop('input', S.anyOf([S.string(), S.object(), S.array()]))
  )
  .extend(baseActionSchema)
