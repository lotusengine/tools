import S from 'fluent-json-schema'
import {
  commonKeySchema,
  actionSchemaResultParameterSchema,
  actionSchemaOutputParameterSchema,
  actionSchemaNextParameterSchema,
  baseActionSchema
} from '../../utils/schemaUtils'

export const validationSchema = S.object()
  .prop('type', S.const('query'))
  .prop(
    'parameters',
    S.object()
      .prop('next', actionSchemaNextParameterSchema)
      .prop('result', actionSchemaResultParameterSchema)
      .prop('output', actionSchemaOutputParameterSchema)
      .prop('endpoint', S.string().format('url'))
      .prop('query', S.string().required())
      .prop(
        'variables',
        S.object().additionalProperties(true).maxProperties(100)
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
        'options',
        S.object().additionalProperties(false).prop('cache', S.number()) // TTL in seconds to cache output
      )
  )
  .extend(baseActionSchema)
