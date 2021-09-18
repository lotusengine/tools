import { View } from 'constructs/src/components'

describe('View component', () => {
  test.only('getData() returns view schema', () => {
    const c = new View()

    c.setLabel('foo').setSummary('foo bar')

    const schema = c.getData()

    expect(schema).toEqual({
      label: 'foo',
      summary: 'foo bar'
    })
  })
})
