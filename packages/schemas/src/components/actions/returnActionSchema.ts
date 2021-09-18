import S from 'fluent-json-schema'
import {
  baseActionSchema,
  actionSchemaNextParameterSchema
} from '../../utils/schemaUtils'

export const validationSchema = S.object()
  .prop('type', S.const('return'))
  .prop('parameters', S.object().prop('next', actionSchemaNextParameterSchema))
  .extend(baseActionSchema)
