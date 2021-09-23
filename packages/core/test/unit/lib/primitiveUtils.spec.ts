import { isEmpty, isSame, removeEmptyProps } from '#core/src/lib/primitiveUtils'

describe('Primitive library', () => {
  it('isSame() returns true for 2 objects of same values but diff order', () => {
    const o1 = {
      items: {
        foo: 'bar',
        bar: 'foo'
      }
    }
    const o2 = {
      items: {
        bar: 'foo',
        foo: 'bar'
      }
    }
    const res = isSame(o1, o2)
    expect(res).toBeTruthy()
  })

  it('isSame() returns true when number changed to string', () => {
    const o1 = {
      bar: '2'
    }
    const o2 = {
      bar: 2
    }
    const res = isSame(o1, o2)
    expect(res).toBeTruthy()
  })

  it('isSame() returns true with null values', () => {
    const o1 = {
      bar: null
    }
    const o2 = {
      bar: null
    }
    const res = isSame(o1, o2)
    expect(res).toBeTruthy()
  })

  it('isSame() returns false for 2 objects have diff deep values', () => {
    const o1 = {
      items: {
        foo: 'bar',
        bar: 'foo'
      }
    }
    const o2 = {
      items: {
        bar: 'foo',
        foo: 'foo'
      }
    }
    const res = isSame(o1, o2)
    expect(res).toBeFalsy()
  })

  it('isEmpty() returns true when object has no properties', () => {
    const res = isEmpty({
      // noop
    })
    expect(res).toBeTruthy()
  })

  it('removeEmptyProps() removes deep empty props', () => {
    const res = removeEmptyProps({
      foo: 'bar',
      boom: null,
      bang: undefined,
      keep: false,
      deep: { bar: 'boom' },
      empty: {},
      also: 0
    })

    expect(res).toEqual({
      foo: 'bar',
      keep: false,
      deep: {
        bar: 'boom'
      },
      also: 0
    })
  })
})
