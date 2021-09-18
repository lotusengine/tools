import { flags } from '@oclif/command'
import { OutputFlags } from '@oclif/parser'
import { deleteService } from 'lib/services/service'
import BaseCommand from 'lib/base'
import ux from 'lib/ux'

export default class ServiceRemove extends BaseCommand {
  static description = 'delete a service'

  static aliases = ['service:rm']

  static flags = {
    ...BaseCommand.flags,
    id: flags.string({
      description: 'service ID',
      required: true
    })
  }

  async run(): Promise<void> {
    const flags = this.parsedFlags as OutputFlags<typeof ServiceRemove.flags>

    await deleteService(flags.id)

    ux.success(`service ${flags.id} deleted`)
  }
}
