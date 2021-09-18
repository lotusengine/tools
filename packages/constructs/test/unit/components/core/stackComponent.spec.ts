import {
  Collection,
  Service,
  Stack,
  View,
  Workflow
} from 'constructs/src/components'

describe('Stack component', () => {
  test.only('getData() returns stack schema', () => {
    const stack = new Stack()

    const s = new Service().setLabel('foo').setSummary('foo bar')
    const w = new Workflow().setLabel('foo').setSummary('foo bar')
    const c = new Collection().setLabel('foo').setSummary('foo bar')
    const v = new View().setLabel('foo').setSummary('foo bar')

    stack
      .setService(s, 'service')
      .addWorkflow(w, 'workflow')
      .addView(v, 'view')
      .addCollection(c, 'collection')

    const schema = stack.getData()

    expect(schema).toEqual({
      service: {
        id: 'service',
        data: {
          label: 'foo',
          summary: 'foo bar',
          settings: {},
          definition: []
        }
      },
      workflows: [
        {
          id: 'workflow',
          data: {
            label: 'foo',
            summary: 'foo bar',
            definition: {}
          }
        }
      ],
      collections: [
        {
          id: 'collection',
          data: {
            label: 'foo',
            summary: 'foo bar'
          }
        }
      ],
      views: [
        {
          id: 'view',
          data: {
            label: 'foo',
            summary: 'foo bar'
          }
        }
      ]
    })
  })
})
