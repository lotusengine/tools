import { mkdir, outputJson, remove } from 'fs-extra'
import { resolve } from 'path'
import {
  CONFIG_NAME,
  readConfig,
  validateConfiguration
} from 'stacker/src/lib/config/configManager'
import { Config } from 'stacker/src/types/config'

describe('Config manager', () => {
  it('readConfig() loads configuration from file', async () => {
    const config: Config = { app: 'foo' }
    const path = resolve(__dirname, '../../../tmp')
    await mkdir(path)
    await outputJson(resolve(path, CONFIG_NAME), config)

    const res = await readConfig({ path })

    expect(res).toEqual({
      app: 'foo'
    })
    await remove(path)
  })

  it('validateConfiguration() should return validated configuration data', () => {
    // @ts-expect-error: Testing invalid config
    const config: Config = { app: 'foo', extra: 'what' }
    const res = validateConfiguration(config)

    expect(res).toEqual({
      app: 'foo'
    })
  })
})
