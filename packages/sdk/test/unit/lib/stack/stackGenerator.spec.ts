import { remove } from 'fs-extra'
import { resolve } from 'path'
import {
  loadStackData,
  prepareStack,
  prepareStackData
} from '#sdk/src/lib/stack/stackGenerator'
import { StackInput, StackModel } from '#types/src/types/stack'

describe('Stack generator', () => {
  const stack: StackModel = {
    service: {
      id: 'service',
      data: {
        settings: { foo: 'bar' }
      }
    },
    workflows: [
      {
        id: 'foo',
        data: {
          definition: {}
        }
      }
    ],
    collections: [
      {
        id: 'foo',
        data: {
          mapping: {},
          queries: {},
          triggers: {},
          options: { strict: false }
        }
      }
    ],
    views: []
  }

  const input: StackInput = {
    service: {
      id: 'service',
      data: {
        settings: '{"foo":"bar"}'
      }
    },
    workflows: [
      {
        id: 'foo',
        data: {
          definition: '{}'
        }
      }
    ],
    collections: [
      {
        id: 'foo',
        data: {
          mapping: '{}',
          queries: '{}',
          triggers: '{}',
          options: '{"strict":false}'
        }
      }
    ],
    views: []
  }

  it('prepareStackData() handles stringifying necessary props', () => {
    const res = prepareStackData(stack)

    expect(res).toEqual(input)
  })

  it('prepareStack() should create out dir and write JSON stack output', async () => {
    const output = resolve(__dirname, 'tmp')
    await prepareStack(stack, { output })

    const json = await loadStackData({ output })
    expect(json).toEqual(input)
    await remove(output)
  })
})
