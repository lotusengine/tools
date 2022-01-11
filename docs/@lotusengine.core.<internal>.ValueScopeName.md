# Class: ValueScopeName

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).ValueScopeName

## Hierarchy

- [`Name`](../wiki/@lotusengine.core.%3Cinternal%3E.Name)

  ↳ **`ValueScopeName`**

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName#constructor)

### Properties

- [prefix](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName#prefix)
- [scopePath](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName#scopepath)
- [str](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName#str)
- [value](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName#value)

### Accessors

- [names](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName#names)

### Methods

- [emptyStr](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName#emptystr)
- [setValue](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName#setvalue)
- [toString](../wiki/@lotusengine.core.%3Cinternal%3E.ValueScopeName#tostring)

## Constructors

### constructor

• **new ValueScopeName**(`prefix`, `nameStr`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `nameStr` | `string` |

#### Overrides

[Name](../wiki/@lotusengine.core.%3Cinternal%3E.Name).[constructor](../wiki/@lotusengine.core.%3Cinternal%3E.Name#constructor)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:60

## Properties

### prefix

• `Readonly` **prefix**: `string`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:57

___

### scopePath

• `Optional` **scopePath**: [`Code`](../wiki/@lotusengine.core.%3Cinternal%3E#code)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:59

___

### str

• `Readonly` **str**: `string`

#### Inherited from

[Name](../wiki/@lotusengine.core.%3Cinternal%3E.Name).[str](../wiki/@lotusengine.core.%3Cinternal%3E.Name#str)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/code.d.ts:9

___

### value

• `Optional` **value**: [`NameValue`](../wiki/@lotusengine.core.%3Cinternal%3E.NameValue)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:58

## Accessors

### names

• `get` **names**(): [`UsedNames`](../wiki/@lotusengine.core.%3Cinternal%3E#usednames)

#### Returns

[`UsedNames`](../wiki/@lotusengine.core.%3Cinternal%3E#usednames)

#### Inherited from

Name.names

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/code.d.ts:13

## Methods

### emptyStr

▸ **emptyStr**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Name](../wiki/@lotusengine.core.%3Cinternal%3E.Name).[emptyStr](../wiki/@lotusengine.core.%3Cinternal%3E.Name#emptystr)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/code.d.ts:12

___

### setValue

▸ **setValue**(`value`, `__namedParameters`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`NameValue`](../wiki/@lotusengine.core.%3Cinternal%3E.NameValue) |
| `__namedParameters` | [`ScopePath`](../wiki/@lotusengine.core.%3Cinternal%3E.ScopePath) |

#### Returns

`void`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/scope.d.ts:61

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Name](../wiki/@lotusengine.core.%3Cinternal%3E.Name).[toString](../wiki/@lotusengine.core.%3Cinternal%3E.Name#tostring)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/code.d.ts:11
