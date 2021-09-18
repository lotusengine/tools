import S from 'fluent-json-schema'
import {
  actionSchemaResultParameterSchema,
  actionSchemaOutputParameterSchema,
  actionSchemaNextParameterSchema,
  baseActionSchema
} from '../../utils/schemaUtils'


export const validationSchema = S.object()
  .prop('type', S.const('module'))
  .prop(
    'parameters',
    S.object()
      .prop('next', actionSchemaNextParameterSchema)
      .prop('result', actionSchemaResultParameterSchema)
      .prop('output', actionSchemaOutputParameterSchema)
      .prop('id', S.string().format('uuid').required())
      .prop(
        'options',
        S.object()
          .maxProperties(100)
          .additionalProperties(S.anyOf([S.string(), S.boolean(), S.number()]))
      )
      .prop(
        'proxy',
        S.object()
          .additionalProperties(false)
          .prop('url', S.string().format('url').required())
          .prop('active', S.boolean())
      )
  )
  .extend(baseActionSchema)
