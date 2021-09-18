import { flags } from '@oclif/command'
import { OutputFlags } from '@oclif/parser'
import { findCollection } from 'lib/services/collection'
import BaseCommand from 'lib/base'
import ux from 'lib/ux'

export default class CollectionFetch extends BaseCommand {
  static description = 'fetch collection details'

  static flags = {
    ...BaseCommand.flags,
    id: flags.string({
      description: 'collection ID'
    })
  }

  async run(): Promise<void> {
    const flags = this.parsedFlags as OutputFlags<typeof CollectionFetch.flags>

    const res = await findCollection(flags.id)

    ux.specs(res)
  }
}
