# Interface: ObjectSchema

[@lotusengine/core](../wiki/@lotusengine.core).[<internal>](../wiki/@lotusengine.core.%3Cinternal%3E).ObjectSchema

## Hierarchy

- [`BaseSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.BaseSchema)<[`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)\>

  ↳ **`ObjectSchema`**

## Table of contents

### Properties

- [isFluentJSONSchema](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#isfluentjsonschema)
- [isFluentSchema](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#isfluentschema)

### Methods

- [additionalProperties](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#additionalproperties)
- [allOf](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#allof)
- [anyOf](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#anyof)
- [const](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#const)
- [default](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#default)
- [definition](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#definition)
- [dependencies](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#dependencies)
- [dependentRequired](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#dependentrequired)
- [dependentSchemas](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#dependentschemas)
- [description](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#description)
- [enum](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#enum)
- [examples](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#examples)
- [extend](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#extend)
- [id](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#id)
- [ifThen](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#ifthen)
- [ifThenElse](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#ifthenelse)
- [maxProperties](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#maxproperties)
- [minProperties](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#minproperties)
- [not](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#not)
- [oneOf](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#oneof)
- [only](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#only)
- [patternProperties](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#patternproperties)
- [prop](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#prop)
- [propertyNames](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#propertynames)
- [raw](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#raw)
- [readOnly](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#readonly)
- [ref](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#ref)
- [required](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#required)
- [title](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#title)
- [writeOnly](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema#writeonly)

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

### additionalProperties

▸ **additionalProperties**(`value`): [`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` \| [`JSONSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#jsonschema) |

#### Returns

[`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:119

___

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

### definition

▸ **definition**(`name`, `props?`): [`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `props?` | [`JSONSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#jsonschema) |

#### Returns

[`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:117

___

### dependencies

▸ **dependencies**(`options`): [`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DependenciesOptions`](../wiki/@lotusengine.core.%3Cinternal%3E.DependenciesOptions) |

#### Returns

[`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:123

___

### dependentRequired

▸ **dependentRequired**(`options`): [`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DependentRequiredOptions`](../wiki/@lotusengine.core.%3Cinternal%3E.DependentRequiredOptions) |

#### Returns

[`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:127

___

### dependentSchemas

▸ **dependentSchemas**(`options`): [`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`DependentSchemaOptions`](../wiki/@lotusengine.core.%3Cinternal%3E.DependentSchemaOptions) |

#### Returns

[`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:128

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

### extend

▸ **extend**(`schema`): [`ExtendedSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#extendedschema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema) \| [`ExtendedSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#extendedschema) |

#### Returns

[`ExtendedSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#extendedschema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:125

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

### maxProperties

▸ **maxProperties**(`max`): [`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `max` | `number` |

#### Returns

[`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:120

___

### minProperties

▸ **minProperties**(`min`): [`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |

#### Returns

[`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:121

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

### only

▸ **only**(`properties`): [`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `properties` | `string`[] |

#### Returns

[`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:126

___

### patternProperties

▸ **patternProperties**(`options`): [`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`PatternPropertiesOptions`](../wiki/@lotusengine.core.%3Cinternal%3E.PatternPropertiesOptions) |

#### Returns

[`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:122

___

### prop

▸ **prop**(`name`, `props?`): [`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `props?` | [`JSONSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#jsonschema) |

#### Returns

[`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:118

___

### propertyNames

▸ **propertyNames**(`value`): [`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`JSONSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#jsonschema) |

#### Returns

[`ObjectSchema`](../wiki/@lotusengine.core.%3Cinternal%3E.ObjectSchema)

#### Defined in

node_modules/fluent-json-schema/src/FluentJSONSchema.d.ts:124

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
