import { commonKeySchema } from '#schemas/src/utils/schemaUtils'
import S from 'fluent-json-schema'

export const validationSchema = S.object()

export const TRIGGER_RANGE_REGEX =
  /^([1-9]|[1-9][0-9]|100)\s+(y|year|years|m|month|months|w|week|weeks|d|day|days|h|hour|hours)$/

export const collectionMappingKeywordSchema = S.object()
  .additionalProperties(false)
  .prop('type', S.const('keyword').required())
  .prop('required', S.boolean().default(false))
  .prop('default', S.string())
  .prop('enum', S.array().items(S.string()))

export const collectionMappingTextSchema = S.object()
  .additionalProperties(false)
  .prop('type', S.const('text').required())
  .prop('required', S.boolean().default(false))
  .prop('default', S.string())
  .prop('enum', S.array().items(S.string()))

export const collectionMappingBooleanSchema = S.object()
  .additionalProperties(false)
  .prop('type', S.const('boolean').required())
  .prop('required', S.boolean().default(false))
  .prop('default', S.boolean())

export const collectionMappingFloatSchema = S.object()
  .additionalProperties(false)
  .prop('type', S.const('float').required())
  .prop('required', S.boolean().default(false))
  .prop('default', S.number())
  .prop('enum', S.array().items(S.number()))

export const collectionMappingIntegerSchema = S.object()
  .additionalProperties(false)
  .prop('type', S.const('integer').required())
  .prop('required', S.boolean().default(false))
  .prop('default', S.integer())
  .prop('enum', S.array().items(S.integer()))

export const collectionMappingSchema = S.object().definition(
  'content',
  S.object()
    .default({})
    .minProperties(0)
    .additionalProperties(
      S.anyOf([
        collectionMappingKeywordSchema,
        collectionMappingTextSchema,
        collectionMappingBooleanSchema,
        collectionMappingFloatSchema,
        collectionMappingIntegerSchema,
        // S.ref('#definition/content'),
        S.array().items(S.ref('#definition/content'))
      ])
    )
    .propertyNames(commonKeySchema)
)
//.ref('#/definitions/content')

export const collectionOptionsSchema = S.object()
  .additionalProperties(false)
  .prop('strict', S.boolean().default(true))

export const collectionQueriesSchemaParams = S.object()
  .additionalProperties(false)
  .prop('query', S.string().required())
  .prop('description', S.string())

export const collectionTriggersSchemaParams = S.object()
  .additionalProperties(false)
  .prop('query', S.string().required())
  .prop('ttl', S.number())
  .prop('range', S.string().pattern(TRIGGER_RANGE_REGEX))

export const collectionTriggersSchema = S.object()
  .additionalProperties(false)
  .propertyNames(commonKeySchema)
  .additionalProperties(collectionTriggersSchemaParams)

export const collectionQueriesSchema = S.object()
  .additionalProperties(false)
  .propertyNames(commonKeySchema)
  .additionalProperties(collectionQueriesSchemaParams)

// // Validate collection input
// export const validateInput: ValidationHandler<CollectionCreateInput | CollectionUpdateInput | CollectionStackInput> = async (
//   payload,
//   { accountId, isUpdate }
// ) => {
//   let collectionInputSchema = S.object()
//     .id(`${getConfig('jsonSchemaUrl')}/collection_input.json`)
//     .title('Collection input')
//     .additionalProperties(false)
//     .prop('label', commonLabelSchema)
//     .prop('summary', commonSummarySchema)
//     .prop('options', collectionOptionsSchema)
//     .prop('mapping', collectionMappingSchema)
//     .prop('triggers', collectionTriggersSchema)
//     .prop('queries', collectionQueriesSchema)

//   if (isUpdate)
//     collectionInputSchema = collectionInputSchema.prop(
//       'id',
//       S.string().format(S.FORMATS.UUID).required()
//     )
//   else
//     collectionInputSchema = collectionInputSchema.prop(
//       'serviceId',
//       S.string().format(S.FORMATS.UUID).required()
//     )

//   const data = validateData(collectionInputSchema, payload)

//   // Ensure existing service
//   if ('serviceId' in data && data.serviceId) await isValidService(accountId, data.serviceId)

//   return data
// }
