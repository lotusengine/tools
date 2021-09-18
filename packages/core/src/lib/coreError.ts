import { Cause, CauseSummary, ILotusError } from '../types/error'

export class LotusError<D extends unknown = any>
  extends Error
  implements ILotusError<D>
{
  public constructor(
    public type: string,
    public code: number,
    public data: D,
    public message: string,
    public cause?: Cause
  ) {
    super(message)
  }

  // Extract data from Error or LotusError for cause property
  static createCauseSummary = (err: Error | ILotusError): CauseSummary => {
    if (err instanceof LotusError) {
      // Some fields like name need getters hence the lack of a simple spread operator
      return {
        type: err.getType(),
        code: err.getCode(),
        data: err.getData(),
        name: err.getName(),
        message: err.getMessage()
      }
    } else {
      return {
        type: 'ERROR',
        name: 'Error',
        message: err.message
      }
    }
  }

  public toString() {
    return `${this.message} [${this.type}, ${this.code}]`
  }

  public getTraces(): string[] {
    return (this.stack || ``).split(`\n`).map<string>((line) => line.trim())
  }

  public getMessage(): string {
    return this.message
  }

  public getName(): string {
    return Object.getPrototypeOf(this).constructor.name
  }

  public getData(): D {
    return this.data
  }

  public getCode(): number {
    return this.code
  }

  public getType(): string {
    return this.type
  }

  public toObject() {
    return {
      type: this.getType(),
      code: this.getCode(),
      message: this.getMessage(),
      name: this.getName(),
      data: this.getData(),
      cause: this.cause ? LotusError.createCauseSummary(this.cause) : undefined,
      stack: this.getTraces()
    }
  }

  public getSafeOutput() {
    return {
      type: this.getType(),
      code: this.getCode(),
      message: this.getMessage(),
      name: this.getName()
    }
  }

  public getChainOfCausation(): Cause[] {
    const chain: Cause[] = []
    let current: Cause = this.cause
    while (current) {
      chain.push(current)
      current = 'cause' in current ? current.cause : undefined
    }
    return chain
  }
}
