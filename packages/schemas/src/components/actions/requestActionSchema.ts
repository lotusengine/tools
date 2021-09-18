import S from 'fluent-json-schema'
import {
  commonKeySchema,
  actionSchemaResultParameterSchema,
  actionSchemaOutputParameterSchema,
  actionSchemaNextParameterSchema,
  baseActionSchema
} from '../../utils/schemaUtils'

export const validationSchema = S.object()
  .prop('type', S.const('request'))
  .prop(
    'parameters',
    S.object()
      .prop('next', actionSchemaNextParameterSchema)
      .prop('result', actionSchemaResultParameterSchema)
      .prop('output', actionSchemaOutputParameterSchema)
      .prop('url', S.string().format('url').required())
      .prop(
        'method',
        S.string().enum([
          'DELETE',
          'GET',
          'HEAD',
          'OPTIONS',
          'PATCH',
          'POST',
          'PUT'
        ])
      )
      .prop(
        'headers',
        S.object()
          .additionalProperties(true)
          .propertyNames(commonKeySchema)
          .maxProperties(100)
          .patternProperties({
            '^.*$': S.string().maxLength(100)
          })
      )
      .prop(
        'query',
        S.object()
          .additionalProperties(true)
          .propertyNames(commonKeySchema)
          .maxProperties(100)
          .patternProperties({
            '^.*$': S.string().maxLength(100)
          })
      )
      .prop(
        'options',
        S.object().additionalProperties(false).prop('cache', S.number()) // TTL in seconds to cache output
      )
      .prop('body', S.object())
  )
  .extend(baseActionSchema)
