# Interface: NumberSchema

[@lotusengine/sdk](../wiki/@lotusengine.sdk).[<internal>](../wiki/@lotusengine.sdk.%3Cinternal%3E).NumberSchema

## Hierarchy

- [`BaseSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema)<[`NumberSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema)\>

  ↳ **`NumberSchema`**

## Table of contents

### Properties

- [isFluentJSONSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#isfluentjsonschema)
- [isFluentSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#isfluentschema)

### Methods

- [allOf](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#allof)
- [anyOf](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#anyof)
- [const](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#const)
- [default](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#default)
- [description](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#description)
- [enum](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#enum)
- [examples](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#examples)
- [exclusiveMaximum](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#exclusivemaximum)
- [exclusiveMinimum](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#exclusiveminimum)
- [id](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#id)
- [ifThen](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#ifthen)
- [ifThenElse](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#ifthenelse)
- [maximum](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#maximum)
- [minimum](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#minimum)
- [multipleOf](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#multipleof)
- [not](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#not)
- [oneOf](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#oneof)
- [raw](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#raw)
- [readOnly](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#readonly)
- [ref](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#ref)
- [required](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#required)
- [title](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#title)
- [writeOnly](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema#writeonly)

## Properties

### isFluentJSONSchema

• **isFluentJSONSchema**: `boolean`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[isFluentJSONSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#isfluentjsonschema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:24

___

### isFluentSchema

• **isFluentSchema**: `boolean`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[isFluentSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#isfluentschema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:23

## Methods

### allOf

▸ **allOf**(`schema`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JSONSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#jsonschema)[] |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[allOf](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#allof)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:19

___

### anyOf

▸ **anyOf**(`schema`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JSONSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#jsonschema)[] |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[anyOf](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#anyof)

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

#### Inherited from

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[const](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#const)

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

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#default)

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

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[description](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#description)

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

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[enum](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#enum)

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

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[examples](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#examples)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:5

___

### exclusiveMaximum

▸ **exclusiveMaximum**(`max`): [`NumberSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` |

#### Returns

[`NumberSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:95

___

### exclusiveMinimum

▸ **exclusiveMinimum**(`min`): [`NumberSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |

#### Returns

[`NumberSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:93

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

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[id](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#id)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:2

___

### ifThen

▸ **ifThen**(`ifClause`, `thenClause`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ifClause` | [`JSONSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#jsonschema) |
| `thenClause` | [`JSONSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#jsonschema) |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[ifThen](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#ifthen)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:11

___

### ifThenElse

▸ **ifThenElse**(`ifClause`, `thenClause`, `elseClause`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ifClause` | [`JSONSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#jsonschema) |
| `thenClause` | [`JSONSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#jsonschema) |
| `elseClause` | [`JSONSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#jsonschema) |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[ifThenElse](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#ifthenelse)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:12

___

### maximum

▸ **maximum**(`max`): [`NumberSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` |

#### Returns

[`NumberSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:94

___

### minimum

▸ **minimum**(`min`): [`NumberSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |

#### Returns

[`NumberSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:92

___

### multipleOf

▸ **multipleOf**(`multiple`): [`NumberSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `multiple` | `number` |

#### Returns

[`NumberSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E.NumberSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:96

___

### not

▸ **not**(`schema`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JSONSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#jsonschema) |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[not](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#not)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:17

___

### oneOf

▸ **oneOf**(`schema`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JSONSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#jsonschema)[] |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[oneOf](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#oneof)

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

#### Inherited from

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[raw](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#raw)

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

#### Inherited from

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[readOnly](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#readonly)

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

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[ref](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#ref)

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

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[required](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#required)

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

#### Inherited from

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[title](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#title)

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

[BaseSchema](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema).[writeOnly](../wiki/@lotusengine.sdk.%3Cinternal%3E.BaseSchema#writeonly)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:22
