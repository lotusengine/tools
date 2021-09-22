import Ajv, { InstanceOptions } from 'ajv'
import addFormats from 'ajv-formats'
import { JsonSchema } from '../types/common'
import { InvalidDataError } from './systemErrors'

export const getClient = (options?: Partial<InstanceOptions>): Ajv => {
  const ajv = new Ajv({
    strict: false,
    useDefaults: true,
    removeAdditional: false, // 'all' basically disables extra props no matter what ane the others , 'failing' strips invalid and false throws. Each object must expliclty set additionalProperties: false since this is insecure by default :(
    ...options
  })

  // Note: if a TS error shows here try different ajv versions
  return addFormats(ajv)
}

// Prettify error - returns first error as a string
export const prettifyErrors = (issues: any, root = 'input'): string[] => {
  return issues.map(
    ({ dataPath, message }: { dataPath: string; message: string }) =>
      `${dataPath || root} ${message}`.trim()
  )
}

// Validate data against schema
export const validateData = <T>(
  schema: JsonSchema,
  data: T,
  opts: Partial<InstanceOptions> = {}
): T | never => {
  const ajv = getClient(opts)
  const s = 'isFluentSchema' in schema ? schema.valueOf() : schema
  const validate = ajv.compile<T>(s)

  const input = { ...data }
  const valid = validate(input)

  // Generic throw - ideally wrap in try/catch with specific validation errors
  if (!valid) {
    // console.log(validate.errors)
    // const errors = prettifyErrors(validate.errors)

    throw new InvalidDataError()
  }
  return input
}

// Test for valid JSON
export const isValidJSON = (params: any) => {
  try {
    JSON.parse(params)
    return true
  } catch (_) {
    return false
  }
}
