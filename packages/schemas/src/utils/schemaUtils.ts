import S from 'fluent-json-schema'

export const commonLabelSchema = S.string().maxLength(100)

export const commonSummarySchema = S.string().maxLength(200)

export const commonDescriptionSchema = S.string().maxLength(1000)

export const commonDataSchema = S.oneOf([S.object(), S.array()])

export const commonKeySchema = S.string()
  .maxLength(100)
  .pattern('^[A-Za-z][A-Za-z_0-9-]{1,98}[A-Z0-9a-z]$')

export const commonTagSchema = S.string()
  .maxLength(20)
  .minLength(5)
  .pattern('^[a-z0-9]+$')

export const commonEventSchema = S.string()
  .maxLength(100)
  .minLength(5)
  .pattern('^[a-z_]+$')

export const commonMetaSchema = S.object()
  .additionalProperties(false)
  .prop('author', S.string().maxLength(100))
  .prop('url', S.string().format('url').maxLength(250))

export const baseActionSchema = S.object()
  .additionalProperties(false)
  //.prop('type', S.string().enum(Object.values(ActionType)).required())
  .prop('description', commonDescriptionSchema)
  .prop(
    'parameters',
    S.object().additionalProperties(false).required().default({})
  )

export const actionSchemaOutputParameterSchema = S.oneOf([
  S.boolean(),
  S.string().pattern(/$.*/).default('$')
])

export const actionSchemaNextParameterSchema = S.string().pattern(
  '^[A-Za-z][A-Za-z_0-9-]{1,98}[A-Z0-9a-z]$'
)

export const actionSchemaResultParameterSchema = S.oneOf([
  S.string(),
  S.object()
])

export const actionSchemaInputParameterSchema = S.oneOf([
  S.string(),
  S.object()
])
