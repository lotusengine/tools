import { remove } from 'fs-extra'
import { resolve } from 'path'
import { StackInput, StackModel } from '#types/types/stack'
import {
  loadStackData,
  prepareStack,
  prepareStackData
} from '#stacker/lib/stack/stackGenerator'

describe('Stack generator', () => {
  const stack: StackModel = {
    service: {
      id: 'service',
      data: {
        parameters: { foo: 'bar' }
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
        parameters: '{"foo":"bar"}'
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
    const path = resolve(__dirname, 'tmp')
    await prepareStack(stack, { path })

    const json = await loadStackData({ path })
    expect(json).toEqual(input)
    await remove(path)
  })
})
