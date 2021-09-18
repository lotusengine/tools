import { flags } from '@oclif/command'
import { OutputFlags } from '@oclif/parser'
import { findService } from 'lib/services/service'
import BaseCommand from 'lib/base'
import ux from 'lib/ux'

export default class ServiceFetch extends BaseCommand {
  static description = 'fetch service details'

  static flags = {
    ...BaseCommand.flags,
    id: flags.string({
      description: 'service ID'
    })
  }

  async run(): Promise<void> {
    const flags = this.parsedFlags as OutputFlags<typeof ServiceFetch.flags>

    const res = await findService(flags.id)

    ux.specs(res)
  }
}
