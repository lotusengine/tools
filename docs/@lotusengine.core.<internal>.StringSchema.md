# Interface: StringSchema

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).StringSchema

## Hierarchy

- [`BaseSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema)<[`StringSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema)\>

  ↳ **`StringSchema`**

## Table of contents

### Properties

- [isFluentJSONSchema](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#isfluentjsonschema)
- [isFluentSchema](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#isfluentschema)

### Methods

- [allOf](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#allof)
- [anyOf](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#anyof)
- [const](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#const)
- [contentEncoding](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#contentencoding)
- [contentMediaType](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#contentmediatype)
- [default](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#default)
- [description](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#description)
- [enum](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#enum)
- [examples](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#examples)
- [format](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#format)
- [id](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#id)
- [ifThen](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#ifthen)
- [ifThenElse](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#ifthenelse)
- [maxLength](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#maxlength)
- [minLength](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#minlength)
- [not](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#not)
- [oneOf](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#oneof)
- [pattern](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#pattern)
- [raw](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#raw)
- [readOnly](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#readonly)
- [ref](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#ref)
- [required](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#required)
- [title](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#title)
- [writeOnly](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema#writeonly)

## Properties

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

### contentEncoding

▸ **contentEncoding**(`encoding`): [`StringSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `string` |

#### Returns

[`StringSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:79

___

### contentMediaType

▸ **contentMediaType**(`mediaType`): [`StringSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mediaType` | `string` |

#### Returns

[`StringSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:80

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

### format

▸ **format**(`format`): [`StringSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | ``"date"`` \| ``"relative-json-pointer"`` \| ``"json-pointer"`` \| ``"uuid"`` \| ``"regex"`` \| ``"ipv6"`` \| ``"ipv4"`` \| ``"hostname"`` \| ``"email"`` \| ``"url"`` \| ``"uri-template"`` \| ``"uri-reference"`` \| ``"uri"`` \| ``"time"`` \| ``"date-time"`` |

#### Returns

[`StringSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:77

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

### maxLength

▸ **maxLength**(`min`): [`StringSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |

#### Returns

[`StringSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:76

___

### minLength

▸ **minLength**(`min`): [`StringSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |

#### Returns

[`StringSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:75

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

### pattern

▸ **pattern**(`pattern`): [`StringSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | `string` \| `RegExp` |

#### Returns

[`StringSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.StringSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:78

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

[BaseSchema](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema).[raw](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema#raw)

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
