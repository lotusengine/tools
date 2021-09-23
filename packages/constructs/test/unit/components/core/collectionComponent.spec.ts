import { Collection } from '#constructs/src/components'

describe('Collection component', () => {
  test.only('getData() returns collection schema', () => {
    const c = new Collection()

    c.setLabel('foo')
      .setSummary('foo bar')
      .setTriggers({
        foo: {
          query: 'the query',
          range: '34h',
          ttl: 100
        }
      })
      .setOptions({ strict: true })
      .setMapping({
        foo: {
          type: 'boolean'
        }
      })
      .setQueries({
        foo: {
          query: 'the query'
        }
      })

    const schema = c.getData()

    expect(schema).toEqual({
      label: 'foo',
      summary: 'foo bar',
      mapping: {
        foo: {
          type: 'boolean'
        }
      },
      options: {
        strict: true
      },
      queries: {
        foo: {
          query: 'the query'
        }
      },
      triggers: {
        foo: {
          query: 'the query',
          range: '34h',
          ttl: 100
        }
      }
    })
  })
})
