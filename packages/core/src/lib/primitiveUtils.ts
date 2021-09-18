import equal from 'deep-equal'
import _, { isPlainObject } from 'lodash'
import createObjectHash from 'object-hash'
export { isEmpty } from 'lodash'
import clean from 'clean-deep'
import { ObjectHash } from '@lotusengine/types'

// Create hash of an object
export const createHash = (obj: object): ObjectHash => createObjectHash(obj)

// Compares two JSON serializable objects
export const isSame = (o1: any, o2: any): boolean => equal(o1, o2)

// Remove empty props  - handy utils to filter out return parameters for ex
export const removeEmptyProps = (obj: any): any => {
  const res = clean(obj)
  return res || {} // We want to remove nested empty objects but not the main one...
}

// Deep clone object
export const deepClone = _.cloneDeep

// Deep merge
export const deepMerge = _.merge

// Performs a recursive strict comparison between two values - expected can have regex
const deepEqual = (expected: any, actual: any): boolean => {
  if (expected instanceof RegExp) {
    return expected.test(actual)
  }

  if (Array.isArray(expected) && Array.isArray(actual)) {
    if (expected.length !== actual.length) {
      return false
    }

    return expected.every((expVal, idx) => deepEqual(expVal, actual[idx]))
  }

  if (isPlainObject(expected) && isPlainObject(actual)) {
    const allKeys = Array.from(
      new Set(Object.keys(expected).concat(Object.keys(actual)))
    )

    return allKeys.every((key) => deepEqual(expected[key], actual[key]))
  }

  return expected === actual
}

// Convert 'true'/'false' to boolean
export const toBoolean = (flag: string | boolean | undefined) => {
  return typeof flag === 'string' && flag === 'false' ? false : !!flag
}

// Check type - https://www.freecodecamp.org/news/javascript-typeof-how-to-check-the-type-of-a-variable-or-object-in-js/
export const typeCheck = (value: unknown): string => {
  const return_value = Object.prototype.toString.call(value)
  // we can also use regex to do this...
  const type = return_value.substring(
    return_value.indexOf(' ') + 1,
    return_value.indexOf(']')
  )

  return type.toLowerCase()
}
