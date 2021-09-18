import S from 'fluent-json-schema'
import {
  baseActionSchema,
  actionSchemaNextParameterSchema
} from '../../utils/schemaUtils'

const parameterSchema = S.object()
  .prop('next', actionSchemaNextParameterSchema)
  .prop('recipient', S.string().required())
  .prop('html', S.string())
  .prop('text', S.string())
  .prop('subject', S.string().required())

export const validationSchema = S.object()
  .prop('type', S.const('notify'))
  .prop(
    'parameters',
    parameterSchema.anyOf([
      parameterSchema.required(['html']),
      parameterSchema.required(['text'])
    ])
  )
  .extend(baseActionSchema)
