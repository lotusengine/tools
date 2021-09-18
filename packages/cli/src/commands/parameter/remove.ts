import { flags } from '@oclif/command'
import { OutputFlags } from '@oclif/parser'
import { deleteParameter } from 'lib/services/parameter'
import BaseCommand from 'lib/base'
import ux from 'lib/ux'

export default class ParameterRemove extends BaseCommand {
  static description = 'delete a parameter'

  static aliases = ['parameter:rm']

  static flags = {
    ...BaseCommand.flags,
    id: flags.string({
      description: 'parameter ID',
      required: true
    })
  }

  async run(): Promise<void> {
    const flags = this.parsedFlags as OutputFlags<typeof ParameterRemove.flags>

    await deleteParameter(flags.id)

    ux.success(`parameter ${flags.id} deleted`)
  }
}
