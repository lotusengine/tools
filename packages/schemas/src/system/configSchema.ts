import S from 'fluent-json-schema'

export const validationSchema = S.object()
  .additionalProperties(false)
  .prop('app', S.string())
