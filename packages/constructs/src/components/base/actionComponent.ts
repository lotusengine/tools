import { Action, ActionParameters, ActionTypeName } from '@lotusengine/types'
import Base from './baseComponent'
import { customAlphabet } from 'nanoid'
import { ActionContructParameters } from '#constructs/types/common'
import { removeEmptyProps } from '@lotusengine/core'

const nanoid = customAlphabet('01234567890abcdefghijklmnopqrstuvwxyz', 10)

export default abstract class BaseAction<
  TParams extends ActionParameters = ActionParameters,
  TExtended extends ActionContructParameters = ActionContructParameters
> extends Base {
  abstract type: ActionTypeName
  protected name: string = ''
  protected description: string | undefined
  protected parameters: TExtended | undefined

  //export interface StartParameters extends Modify<StartActionParameters, { next?: BaseAction }> { }

  getData(): Action {
    return this.validateData<Action>(
      removeEmptyProps({
        type: this.getType(),
        description: this.getDescription(),
        parameters: this.getParameters()
      })
    )
  }

  getType(): ActionTypeName {
    return this.type
  }

  setName(name: string): this {
    this.name = name
    return this
  }

  getName(): string {
    if (!this.name) this.setName(`${this.getType()}-${nanoid()}`)
    return this.name as string
  }

  setDescription(description: string): this {
    this.description = description
    return this
  }

  getDescription(): string | undefined {
    return this.description
  }

  setParameters(parameters: TExtended): this {
    this.parameters = parameters
    return this
  }

  // Get parameters and transform next action into string
  getParameters(): TParams {
    // If not set we return empty object
    if (!this.parameters) return {} as TParams

    const { next, ...rest } = Object.assign(this.parameters)

    return (
      next
        ? {
            ...rest,
            next: next.getName()
          }
        : rest
    ) as TParams
  }
}
