import { Workflow, EchoAction, StartAction } from '#constructs/components'

describe('Workflow component', () => {
  test.only('getData() returns workflow schema', () => {
    const next = new EchoAction()
      .setParameters({ payload: { foo: 'bar' } })
      .setName('bar')
    const start = new StartAction().setName('foo').setParameters({ next })

    const w = new Workflow()
    w.setLabel('foo').setSummary('foo bar').addAction(start).addAction(next)
    const schema = w.getData()

    expect(schema).toEqual({
      label: 'foo',
      summary: 'foo bar',
      definition: {
        foo: {
          type: 'start',
          parameters: {
            next: 'bar'
          }
        },
        bar: {
          type: 'echo',
          parameters: {
            payload: {
              foo: 'bar'
            }
          }
        }
      }
    })
  })
})
