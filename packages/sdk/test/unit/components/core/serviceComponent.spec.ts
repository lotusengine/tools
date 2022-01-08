import { Service } from '#sdk/components'

describe('Service component', () => {
  test.only('getData() returns service schema', () => {
    const s = new Service()

    s.setLabel('foo')
      .setSummary('foo bar')
      .setDescription('lorem ipsum')
      .setSettings({ foo: 'bar' })
      .setDefinition([
        {
          type: 'unit',
          element: {
            type: 'select',
            name: 'foo',
            options: []
          }
        }
      ])

    const schema = s.getData()

    expect(schema).toEqual({
      label: 'foo',
      summary: 'foo bar',
      description: 'lorem ipsum',
      parameters: {
        foo: 'bar'
      },
      settings: [
        {
          type: 'unit',
          element: {
            type: 'select',
            name: 'foo',
            options: []
          }
        }
      ]
    })
  })
})
