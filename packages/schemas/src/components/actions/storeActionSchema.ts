import S from 'fluent-json-schema'
import {
  baseActionSchema,
  actionSchemaNextParameterSchema,
  actionSchemaResultParameterSchema
} from '../../utils/schemaUtils'

export const validationSchema = S.object()
  .prop('type', S.const('store'))
  .prop(
    'parameters',
    S.object()
      .prop('data', S.oneOf([S.object(), S.array(), S.string()]).required()) // TODO ensure array is correct here
      .prop('collection', S.string().format('uuid').required())
      .prop('result', actionSchemaResultParameterSchema)
      .prop('next', actionSchemaNextParameterSchema)
  )
  .extend(baseActionSchema)
