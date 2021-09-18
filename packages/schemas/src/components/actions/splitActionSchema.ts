import S from 'fluent-json-schema'
import { baseActionSchema } from '../../utils/schemaUtils'

export const validationSchema = S.object()
  .prop('type', S.const('split'))
  .prop(
    'parameters',
    S.object().prop(
      'actions',
      S.array()
        .items(S.string())
        .minItems(0)
        .maxItems(5)
        .uniqueItems(true)
        .required()
    )
  )
  .extend(baseActionSchema)
