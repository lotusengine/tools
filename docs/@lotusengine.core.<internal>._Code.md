# Class: \_Code

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E)._Code

## Hierarchy

- [`_CodeOrName`](../wiki/@lotusengine.core.%3Cinternal%3E._CodeOrName)

  ↳ **`_Code`**

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.core.%3Cinternal%3E._Code#constructor)

### Properties

- [\_items](../wiki/@lotusengine.core.%3Cinternal%3E._Code#_items)
- [\_names](../wiki/@lotusengine.core.%3Cinternal%3E._Code#_names)
- [\_str](../wiki/@lotusengine.core.%3Cinternal%3E._Code#_str)

### Accessors

- [names](../wiki/@lotusengine.core.%3Cinternal%3E._Code#names)
- [str](../wiki/@lotusengine.core.%3Cinternal%3E._Code#str)

### Methods

- [emptyStr](../wiki/@lotusengine.core.%3Cinternal%3E._Code#emptystr)
- [toString](../wiki/@lotusengine.core.%3Cinternal%3E._Code#tostring)

## Constructors

### constructor

• **new _Code**(`code`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` \| readonly [`CodeItem`](../wiki/@lotusengine.core.%3Cinternal%3E#codeitem)[] |

#### Overrides

[_CodeOrName](../wiki/@lotusengine.core.%3Cinternal%3E._CodeOrName).[constructor](../wiki/@lotusengine.core.%3Cinternal%3E._CodeOrName#constructor)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/code.d.ts:19

## Properties

### \_items

• `Readonly` **\_items**: readonly [`CodeItem`](../wiki/@lotusengine.core.%3Cinternal%3E#codeitem)[]

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/code.d.ts:16

___

### \_names

• `Private` `Optional` **\_names**: `any`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/code.d.ts:18

___

### \_str

• `Private` `Optional` **\_str**: `any`

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/code.d.ts:17

## Accessors

### names

• `get` **names**(): [`UsedNames`](../wiki/@lotusengine.core.%3Cinternal%3E#usednames)

#### Returns

[`UsedNames`](../wiki/@lotusengine.core.%3Cinternal%3E#usednames)

#### Overrides

\_CodeOrName.names

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/code.d.ts:23

___

### str

• `get` **str**(): `string`

#### Returns

`string`

#### Overrides

\_CodeOrName.str

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/code.d.ts:22

## Methods

### emptyStr

▸ **emptyStr**(): `boolean`

#### Returns

`boolean`

#### Overrides

[_CodeOrName](../wiki/@lotusengine.core.%3Cinternal%3E._CodeOrName).[emptyStr](../wiki/@lotusengine.core.%3Cinternal%3E._CodeOrName#emptystr)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/code.d.ts:21

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Overrides

[_CodeOrName](../wiki/@lotusengine.core.%3Cinternal%3E._CodeOrName).[toString](../wiki/@lotusengine.core.%3Cinternal%3E._CodeOrName#tostring)

#### Defined in

packages/core/node_modules/ajv/dist/compile/codegen/code.d.ts:20
