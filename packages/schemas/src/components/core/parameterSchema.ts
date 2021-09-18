// import { validateData } from 'constructs/src/lib/validatorUtils'
import S from 'fluent-json-schema'
// import { commonKeySchema, commonSummarySchema } from 'src/utils/schemaUtils'
// import { ParameterModel } from 'types/src/types/parameter'

export const validationSchema = S.object()

// export const validateInput: ValidationHandler<
//   ParameterUpsertInput,
//   ParameterModel
// > = async (payload, { accountId, isUpdate }) => {
//   const valueSchema = S.string().maxLength(1000)
//   const keySchema = commonKeySchema

//   let parameterInputSchema = S.object()
//    // .id(`${getConfig('jsonSchemaUrl')}/parameter_input.json`)
//     .title('Parameter input')
//     .additionalProperties(false)
//     .prop('summary', commonSummarySchema)
//     .prop('value', isUpdate ? valueSchema : valueSchema.required())
//     .prop('key', isUpdate ? keySchema : keySchema.required())

//   if (isUpdate) {
//     parameterInputSchema = parameterInputSchema.prop(
//       'id',
//       S.string().format(S.FORMATS.UUID).required()
//     )
//   }

//   const data = validateData(parameterInputSchema, payload)

//   return data
// }
