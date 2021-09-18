export declare type Cause = ILotusError | Error | undefined

export type ErrorShape = Error
export interface GenericErrorShape<D extends any> extends ErrorShape {
  data: D
}
export interface CauseSummary {
  type: string
  name: string
  code?: number
  data?: unknown
  message: string
}

export declare class ILotusError<D extends any = any>
  extends Error
  implements GenericErrorShape<D>
{
  type: string
  code: number
  data: D
  message: string
  cause?: Cause
  constructor(
    type: string,
    code: number,
    data: D,
    message: string,
    cause?: Cause
  )
  toString(): string
  getTraces(): string[]
  getName(): string
  getCode(): number
  getType(): string
  getMessage(): string
  getData(): D
  toObject(): {
    type: string
    code: number
    data: unknown
    message: string
    // We return a simplified cause thats more parseable and doesn't print stack ad nauseum
    cause: CauseSummary | undefined
    stack: string[]
    name: string
  }
  getSafeOutput(): {
    type: string
    code: number
    message: string
    name: string
  }
  getChainOfCausation(): any[]
}
