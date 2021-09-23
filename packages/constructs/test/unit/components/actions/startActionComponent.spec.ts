import { EchoAction, StartAction } from '#constructs/src/components'

describe('Start action component', () => {
  test.only('getData() returns action data with next action as string', () => {
    const next = new EchoAction().setParameters({ payload: { foo: 'bar' } })
    const start = new StartAction()
      .setName('foo')
      .setParameters({ next })
      .setDescription('This is it')
    const schema = start.getData()

    expect(schema).toEqual({
      type: 'start',
      description: 'This is it',
      parameters: {
        next: expect.stringMatching(/^echo-.{10}/)
      }
    })
  })
})
