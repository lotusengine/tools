import { flags } from '@oclif/command'
import { OutputFlags } from '@oclif/parser'
import { findParameter } from 'lib/services/parameter'
import BaseCommand from 'lib/base'
import ux from 'lib/ux'

export default class ParameterFetch extends BaseCommand {
  static description = 'fetch parameter details'

  static flags = {
    ...BaseCommand.flags,
    id: flags.string({
      description: 'parameter ID'
    })
  }

  async run(): Promise<void> {
    const flags = this.parsedFlags as OutputFlags<typeof ParameterFetch.flags>

    const res = await findParameter(flags.id)

    ux.specs(res)
  }
}
