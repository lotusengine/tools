import S from 'fluent-json-schema'
import { baseActionSchema } from '../../utils/schemaUtils'

export const validationSchema = S.object()
  .prop('type', S.const('decision'))
  .prop(
    'parameters',
    S.object()
      .prop('fallback', S.string()) // Action to perform when no match
      .prop(
        'conditions',
        S.array().items(
          S.object()
            .additionalProperties(false)
            .prop('test', S.string().required())
            .prop('action', S.string().required())
        )
      )
      .required()
  )
  .extend(baseActionSchema)
