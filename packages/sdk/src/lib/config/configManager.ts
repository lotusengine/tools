import { configSchema } from '@lotusengine/schemas'
import { validateData } from '#core/lib/validatorUtils'
import { readJson } from 'fs-extra'
import { resolve } from 'path'
import { Config, ReadConfigOptions } from '../../types/config'

export const CONFIG_NAME = 'lotusengine.json'

// Read config data
export const readConfig = async (options?: ReadConfigOptions) => {
  const path = options?.path || '.'
  return await readJson(resolve(path, CONFIG_NAME))
}

// Ensure valid config schema
export const validateConfiguration = (data: Config): Config | never => {
  return validateData<Config>(configSchema, data, {
    removeAdditional: 'failing'
  })
}
