import { EchoAction } from '#constructs/src/components'

describe('Echo action component', () => {
  test.only('getData() returns action data with next action as string', () => {
    const next = new EchoAction().setParameters({ payload: { foo: 'bar' } })
    const echo = new EchoAction().setDescription('This is it').setParameters({
      payload: { bar: 'foo' },
      next
    })

    const schema = echo.getData()

    expect(schema).toEqual({
      type: 'echo',
      description: 'This is it',
      parameters: {
        payload: {
          bar: 'foo'
        },
        next: expect.stringMatching(/^echo-.{10}/)
      }
    })
  })
})
