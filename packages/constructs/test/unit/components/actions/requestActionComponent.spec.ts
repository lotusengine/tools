import { EchoAction, RequestAction } from '#constructs/components'

describe('Request action component', () => {
  test.only('getData() returns action data with next action as string', () => {
    const next = new EchoAction().setParameters({ payload: { foo: 'bar' } })
    const request = new RequestAction()
      .setName('foo')
      .setParameters({ next, url: 'https://example.org' })
      .setDescription('This is it')
    const schema = request.getData()

    expect(schema).toEqual({
      type: 'request',
      description: 'This is it',
      parameters: {
        url: 'https://example.org',
        next: expect.stringMatching(/^echo-.{10}/)
      }
    })
  })
})
