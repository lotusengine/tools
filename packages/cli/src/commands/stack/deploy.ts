import { flags } from '@oclif/command'
import { OutputFlags } from '@oclif/parser'
import ux from 'lib/ux'
import BaseCommand from 'lib/base'
import { deployStack } from 'lib/services/stack'

export default class StackDeploy extends BaseCommand {
  static description = 'deploy a stack'

  static flags = {
    ...BaseCommand.flags,
    app: flags.string({
      description: 'path to stack folder',
      required: true
    })
  }

  async run(): Promise<void> {
    const flags = this.parsedFlags as OutputFlags<typeof StackDeploy.flags>

    const result = await deployStack({
      app: flags.serviceId,
      label: flags.label,
      summary: flags.summary,
      definition: flags.definition
    })

    ux.success(`stack ${result.id} created`)
  }
}
