import { stringifyData } from '#sdk/src/lib/utils/dataUtils'

describe('Data utils', () => {
  const data = {
    name: {
      first: 'Vlad',
      last: 'The Impaler'
    },
    age: 379,
    address: {
      billing: {
        street: '1 Main St',
        city: 'Sighișoara',
        country: 'Transylvania'
      }
    },
    nicknames: ['Vlad', 'Ol Fangs', 'Jed']
  }

  it('stringifyData() stringifies certain properties', () => {
    const res = stringifyData(data, ['nicknames', 'address'])

    expect(res).toEqual({
      name: {
        first: 'Vlad',
        last: 'The Impaler'
      },
      age: 379,
      address:
        '{"billing":{"street":"1 Main St","city":"Sighișoara","country":"Transylvania"}}',
      nicknames: '["Vlad","Ol Fangs","Jed"]'
    })
  })

  it('stringifyData() handles missing props', () => {
    const res = stringifyData(data, ['whatever'])

    expect(res).toEqual(data)
  })
})
