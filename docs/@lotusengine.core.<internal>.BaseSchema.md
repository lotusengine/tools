# Interface: BaseSchema<T\>

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).BaseSchema

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`BaseSchema`**

  ↳ [`S`](../wiki/@lotusengine.core.%3Cinternal%3E.S)

  ↳ [`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

  ↳ [`ArraySchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ArraySchema)

  ↳ [`StringSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema)

  ↳ [`NumberSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.NumberSchema)

  ↳ [`IntegerSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.IntegerSchema)

  ↳ [`BooleanSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.BooleanSchema)

## Table of contents

### Properties

- [isFluentJSONSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#isfluentjsonschema)
- [isFluentSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#isfluentschema)

### Methods

- [allOf](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#allof)
- [anyOf](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#anyof)
- [const](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#const)
- [default](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#default)
- [description](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#description)
- [enum](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#enum)
- [examples](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#examples)
- [id](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#id)
- [ifThen](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#ifthen)
- [ifThenElse](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#ifthenelse)
- [not](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#not)
- [oneOf](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#oneof)
- [raw](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#raw)
- [readOnly](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#readonly)
- [ref](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#ref)
- [required](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#required)
- [title](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#title)
- [writeOnly](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#writeonly)

## Properties

### isFluentJSONSchema

• **isFluentJSONSchema**: `boolean`

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:24

___

### isFluentSchema

• **isFluentSchema**: `boolean`

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

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:18

___

### const

▸ **const**(`value`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`T`

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

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:12

___

### not

▸ **not**(`schema`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JSONSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#jsonschema) |

#### Returns

`T`

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:17

___

### oneOf

▸ **oneOf**(`schema`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JSONSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#jsonschema)[] |

#### Returns

`T`

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:20

___

### raw

▸ **raw**(`fragment`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `any` |

#### Returns

`T`

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:25

___

### readOnly

▸ **readOnly**(`isReadOnly?`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isReadOnly?` | `boolean` |

#### Returns

`T`

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

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:10

___

### title

▸ **title**(`title`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |

#### Returns

`T`

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

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:22
