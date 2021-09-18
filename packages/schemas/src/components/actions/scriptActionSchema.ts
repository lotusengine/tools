import S from 'fluent-json-schema'
import {
  actionSchemaResultParameterSchema,
  actionSchemaOutputParameterSchema,
  actionSchemaNextParameterSchema,
  baseActionSchema
} from '../../utils/schemaUtils'

export const validationSchema = S.object()
  .prop('type', S.const('script'))
  .prop(
    'parameters',
    S.object()
      .prop('code', S.string().required())
      .prop('result', actionSchemaResultParameterSchema)
      .prop('output', actionSchemaOutputParameterSchema)
      .prop('next', actionSchemaNextParameterSchema)
  )
  .extend(baseActionSchema)
