import S from 'fluent-json-schema'
import {
  baseActionSchema,
  actionSchemaNextParameterSchema,
  actionSchemaResultParameterSchema
} from '../../utils/schemaUtils'

export const validationSchema = S.object()
  .prop('type', S.const('mock'))
  .prop(
    'parameters',
    S.object()
      .prop('next', actionSchemaNextParameterSchema)
      .prop('result', actionSchemaResultParameterSchema)
      .prop(
        'mocks',
        S.array().items(
          S.object()
            .additionalProperties(false)
            .prop('match', S.string())
            .prop('response')
        )
      )
  )
  .extend(baseActionSchema)
