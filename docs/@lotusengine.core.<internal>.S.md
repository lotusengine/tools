# Interface: S

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).S

## Hierarchy

- [`BaseSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema)<[`S`](../wiki/@lotusengine.core.%3Cinternal%3E.S)\>

  ↳ **`S`**

## Table of contents

### Properties

- [FORMATS](../wiki/@lotusengine.core.%3Cinternal%3E.S#formats)
- [isFluentJSONSchema](../wiki/@lotusengine.core.%3Cinternal%3E.S#isfluentjsonschema)
- [isFluentSchema](../wiki/@lotusengine.core.%3Cinternal%3E.S#isfluentschema)

### Methods

- [allOf](../wiki/@lotusengine.core.%3Cinternal%3E.S#allof)
- [anyOf](../wiki/@lotusengine.core.%3Cinternal%3E.S#anyof)
- [array](../wiki/@lotusengine.core.%3Cinternal%3E.S#array)
- [boolean](../wiki/@lotusengine.core.%3Cinternal%3E.S#boolean)
- [const](../wiki/@lotusengine.core.%3Cinternal%3E.S#const)
- [default](../wiki/@lotusengine.core.%3Cinternal%3E.S#default)
- [description](../wiki/@lotusengine.core.%3Cinternal%3E.S#description)
- [enum](../wiki/@lotusengine.core.%3Cinternal%3E.S#enum)
- [examples](../wiki/@lotusengine.core.%3Cinternal%3E.S#examples)
- [id](../wiki/@lotusengine.core.%3Cinternal%3E.S#id)
- [ifThen](../wiki/@lotusengine.core.%3Cinternal%3E.S#ifthen)
- [ifThenElse](../wiki/@lotusengine.core.%3Cinternal%3E.S#ifthenelse)
- [integer](../wiki/@lotusengine.core.%3Cinternal%3E.S#integer)
- [mixed](../wiki/@lotusengine.core.%3Cinternal%3E.S#mixed)
- [not](../wiki/@lotusengine.core.%3Cinternal%3E.S#not)
- [null](../wiki/@lotusengine.core.%3Cinternal%3E.S#null)
- [number](../wiki/@lotusengine.core.%3Cinternal%3E.S#number)
- [object](../wiki/@lotusengine.core.%3Cinternal%3E.S#object)
- [oneOf](../wiki/@lotusengine.core.%3Cinternal%3E.S#oneof)
- [raw](../wiki/@lotusengine.core.%3Cinternal%3E.S#raw)
- [readOnly](../wiki/@lotusengine.core.%3Cinternal%3E.S#readonly)
- [ref](../wiki/@lotusengine.core.%3Cinternal%3E.S#ref)
- [required](../wiki/@lotusengine.core.%3Cinternal%3E.S#required)
- [string](../wiki/@lotusengine.core.%3Cinternal%3E.S#string)
- [title](../wiki/@lotusengine.core.%3Cinternal%3E.S#title)
- [writeOnly](../wiki/@lotusengine.core.%3Cinternal%3E.S#writeonly)

## Properties

### FORMATS

• **FORMATS**: [`FORMATS`](../wiki/@lotusengine.core.%3Cinternal%3E#formats)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:254

___

### isFluentJSONSchema

• **isFluentJSONSchema**: `boolean`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[isFluentJSONSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#isfluentjsonschema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:24

___

### isFluentSchema

• **isFluentSchema**: `boolean`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[isFluentSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#isfluentschema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:23

## Methods

### allOf

▸ **allOf**(`schema`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JSONSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#jsonschema)[] |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[allOf](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#allof)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:19

___

### anyOf

▸ **anyOf**(`schema`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JSONSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#jsonschema)[] |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[anyOf](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#anyof)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:18

___

### array

▸ **array**(): [`ArraySchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ArraySchema)

#### Returns

[`ArraySchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ArraySchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:238

___

### boolean

▸ **boolean**(): [`BooleanSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.BooleanSchema)

#### Returns

[`BooleanSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.BooleanSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:237

___

### const

▸ **const**(`value`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[const](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#const)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:8

___

### default

▸ **default**(`value`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[default](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#default)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:9

___

### description

▸ **description**(`description`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[description](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#description)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:4

___

### enum

▸ **enum**(`values`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `any`[] |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[enum](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#enum)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:7

___

### examples

▸ **examples**(`examples`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `examples` | `any`[] |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[examples](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#examples)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:5

___

### id

▸ **id**(`id`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[id](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#id)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:2

___

### ifThen

▸ **ifThen**(`ifClause`, `thenClause`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ifClause` | [`JSONSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#jsonschema) |
| `thenClause` | [`JSONSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#jsonschema) |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[ifThen](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#ifthen)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:11

___

### ifThenElse

▸ **ifThenElse**(`ifClause`, `thenClause`, `elseClause`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ifClause` | [`JSONSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#jsonschema) |
| `thenClause` | [`JSONSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#jsonschema) |
| `elseClause` | [`JSONSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#jsonschema) |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[ifThenElse](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#ifthenelse)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:12

___

### integer

▸ **integer**(): [`IntegerSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.IntegerSchema)

#### Returns

[`IntegerSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.IntegerSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:236

___

### mixed

▸ **mixed**<`T`\>(`types`): [`MixedSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#mixedschema)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [[`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type)] \| [[`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type)] \| [[`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type)] \| [[`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type)] \| [[`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type)] \| [[`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type)] \| [[`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type), [`TYPE`](../wiki/@lotusengine.core.%3Cinternal%3E#type)] |

#### Parameters

| Name | Type |
| :------ | :------ |
| `types` | `T` |

#### Returns

[`MixedSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#mixedschema)<`T`\>

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:241

___

### not

▸ **not**(`schema`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JSONSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#jsonschema) |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[not](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#not)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:17

___

### null

▸ **null**(): [`NullSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.NullSchema)

#### Returns

[`NullSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.NullSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:240

___

### number

▸ **number**(): [`NumberSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.NumberSchema)

#### Returns

[`NumberSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.NumberSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:235

___

### object

▸ **object**(): [`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Returns

[`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:239

___

### oneOf

▸ **oneOf**(`schema`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JSONSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#jsonschema)[] |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[oneOf](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#oneof)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:20

___

### raw

▸ **raw**(`fragment`): [`S`](../wiki/@lotusengine.core.%3Cinternal%3E.S)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `any` |

#### Returns

[`S`](../wiki/@lotusengine.core.%3Cinternal%3E.S)

#### Overrides

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[raw](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#raw)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:253

___

### readOnly

▸ **readOnly**(`isReadOnly?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isReadOnly?` | `boolean` |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[readOnly](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#readonly)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:21

___

### ref

▸ **ref**(`ref`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ref` | `string` |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[ref](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#ref)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:6

___

### required

▸ **required**(`fields?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fields?` | `string`[] |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[required](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#required)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:10

___

### string

▸ **string**(): [`StringSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema)

#### Returns

[`StringSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:234

___

### title

▸ **title**(`title`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[title](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#title)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:3

___

### writeOnly

▸ **writeOnly**(`isWriteOnly?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isWriteOnly?` | `boolean` |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[writeOnly](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#writeonly)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:22
