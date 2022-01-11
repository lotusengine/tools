# Interface: ArraySchema

[@lotusengine/schemas](../wiki/@lotusengine.schemas).[<internal>](../wiki/@lotusengine.schemas.%3Cinternal%3E).ArraySchema

## Hierarchy

- [`BaseSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema)<[`ArraySchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema)\>

  ↳ **`ArraySchema`**

## Table of contents

### Properties

- [isFluentJSONSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#isfluentjsonschema)
- [isFluentSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#isfluentschema)

### Methods

- [additionalItems](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#additionalitems)
- [allOf](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#allof)
- [anyOf](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#anyof)
- [const](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#const)
- [contains](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#contains)
- [default](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#default)
- [description](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#description)
- [enum](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#enum)
- [examples](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#examples)
- [id](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#id)
- [ifThen](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#ifthen)
- [ifThenElse](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#ifthenelse)
- [items](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#items)
- [maxItems](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#maxitems)
- [minItems](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#minitems)
- [not](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#not)
- [oneOf](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#oneof)
- [raw](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#raw)
- [readOnly](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#readonly)
- [ref](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#ref)
- [required](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#required)
- [title](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#title)
- [uniqueItems](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#uniqueitems)
- [writeOnly](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema#writeonly)

## Properties

### isFluentJSONSchema

• **isFluentJSONSchema**: `boolean`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[isFluentJSONSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#isfluentjsonschema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:24

___

### isFluentSchema

• **isFluentSchema**: `boolean`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[isFluentSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#isfluentschema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:23

## Methods

### additionalItems

▸ **additionalItems**(`items`): [`ArraySchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | `boolean` \| [`JSONSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E#jsonschema)[] |

#### Returns

[`ArraySchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:109

___

### allOf

▸ **allOf**(`schema`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JSONSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E#jsonschema)[] |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[allOf](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#allof)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:19

___

### anyOf

▸ **anyOf**(`schema`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JSONSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E#jsonschema)[] |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[anyOf](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#anyof)

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

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[const](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#const)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:8

___

### contains

▸ **contains**(`value`): [`ArraySchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` \| [`JSONSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E#jsonschema) |

#### Returns

[`ArraySchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:110

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

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[default](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#default)

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

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[description](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#description)

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

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[enum](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#enum)

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

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[examples](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#examples)

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

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[id](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#id)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:2

___

### ifThen

▸ **ifThen**(`ifClause`, `thenClause`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ifClause` | [`JSONSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E#jsonschema) |
| `thenClause` | [`JSONSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E#jsonschema) |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[ifThen](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#ifthen)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:11

___

### ifThenElse

▸ **ifThenElse**(`ifClause`, `thenClause`, `elseClause`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ifClause` | [`JSONSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E#jsonschema) |
| `thenClause` | [`JSONSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E#jsonschema) |
| `elseClause` | [`JSONSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E#jsonschema) |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[ifThenElse](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#ifthenelse)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:12

___

### items

▸ **items**(`items`): [`ArraySchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `items` | [`JSONSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E#jsonschema) \| [`JSONSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E#jsonschema)[] |

#### Returns

[`ArraySchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:108

___

### maxItems

▸ **maxItems**(`max`): [`ArraySchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` |

#### Returns

[`ArraySchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:113

___

### minItems

▸ **minItems**(`min`): [`ArraySchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |

#### Returns

[`ArraySchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:112

___

### not

▸ **not**(`schema`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JSONSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E#jsonschema) |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[not](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#not)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:17

___

### oneOf

▸ **oneOf**(`schema`): `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JSONSchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E#jsonschema)[] |

#### Returns

`T`

#### Inherited from

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[oneOf](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#oneof)

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

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[raw](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#raw)

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

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[readOnly](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#readonly)

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

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[ref](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#ref)

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

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[required](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#required)

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

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[title](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#title)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:3

___

### uniqueItems

▸ **uniqueItems**(`boolean`): [`ArraySchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `boolean` | `boolean` |

#### Returns

[`ArraySchema`](../wiki/@lotusengine.schemas.%3Cinternal%3E.ArraySchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:111

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

[BaseSchema](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema).[writeOnly](../wiki/@lotusengine.schemas.%3Cinternal%3E.BaseSchema#writeonly)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:22
