# Class: Collection

[@lotusengine/sdk](../wiki/@lotusengine.sdk).Collection

## Hierarchy

- [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)

  ↳ **`Collection`**

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.sdk.Collection#constructor)

### Properties

- [label](../wiki/@lotusengine.sdk.Collection#label)
- [mapping](../wiki/@lotusengine.sdk.Collection#mapping)
- [options](../wiki/@lotusengine.sdk.Collection#options)
- [queries](../wiki/@lotusengine.sdk.Collection#queries)
- [schema](../wiki/@lotusengine.sdk.Collection#schema)
- [summary](../wiki/@lotusengine.sdk.Collection#summary)
- [triggers](../wiki/@lotusengine.sdk.Collection#triggers)

### Methods

- [generateHash](../wiki/@lotusengine.sdk.Collection#generatehash)
- [getData](../wiki/@lotusengine.sdk.Collection#getdata)
- [getLabel](../wiki/@lotusengine.sdk.Collection#getlabel)
- [getMapping](../wiki/@lotusengine.sdk.Collection#getmapping)
- [getOptions](../wiki/@lotusengine.sdk.Collection#getoptions)
- [getQueries](../wiki/@lotusengine.sdk.Collection#getqueries)
- [getSummary](../wiki/@lotusengine.sdk.Collection#getsummary)
- [getTriggers](../wiki/@lotusengine.sdk.Collection#gettriggers)
- [setLabel](../wiki/@lotusengine.sdk.Collection#setlabel)
- [setMapping](../wiki/@lotusengine.sdk.Collection#setmapping)
- [setOptions](../wiki/@lotusengine.sdk.Collection#setoptions)
- [setQueries](../wiki/@lotusengine.sdk.Collection#setqueries)
- [setSummary](../wiki/@lotusengine.sdk.Collection#setsummary)
- [setTriggers](../wiki/@lotusengine.sdk.Collection#settriggers)
- [validateData](../wiki/@lotusengine.sdk.Collection#validatedata)

## Constructors

### constructor

• **new Collection**()

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[constructor](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#constructor)

## Properties

### label

• **label**: `undefined` \| `string`

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:18](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L18)

___

### mapping

• **mapping**: `undefined` \| [`CollectionMapping`](../wiki/@lotusengine.sdk.%3Cinternal%3E.CollectionMapping)

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:14](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L14)

___

### options

• **options**: `undefined` \| [`CollectionOptions`](../wiki/@lotusengine.sdk.%3Cinternal%3E.CollectionOptions)

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:16](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L16)

___

### queries

• **queries**: `undefined` \| [`CollectionQueries`](../wiki/@lotusengine.sdk.%3Cinternal%3E.CollectionQueries)

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:15](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L15)

___

### schema

• **schema**: [`ExtendedSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#extendedschema) = `collectionSchema`

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[schema](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#schema)

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:13](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L13)

___

### summary

• **summary**: `undefined` \| `string`

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:19](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L19)

___

### triggers

• **triggers**: `undefined` \| [`CollectionTriggers`](../wiki/@lotusengine.sdk.%3Cinternal%3E.CollectionTriggers)

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:17](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L17)

## Methods

### generateHash

▸ **generateHash**(): `string`

#### Returns

`string`

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[generateHash](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#generatehash)

#### Defined in

[packages/sdk/src/components/base/baseComponent.ts:9](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/base/baseComponent.ts#L9)

___

### getData

▸ **getData**(): [`CollectionStackModel`](../wiki/@lotusengine.sdk.%3Cinternal%3E#collectionstackmodel)

#### Returns

[`CollectionStackModel`](../wiki/@lotusengine.sdk.%3Cinternal%3E#collectionstackmodel)

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[getData](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getdata)

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:75](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L75)

___

### getLabel

▸ **getLabel**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:26](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L26)

___

### getMapping

▸ **getMapping**(): `undefined` \| [`CollectionMapping`](../wiki/@lotusengine.sdk.%3Cinternal%3E.CollectionMapping)

#### Returns

`undefined` \| [`CollectionMapping`](../wiki/@lotusengine.sdk.%3Cinternal%3E.CollectionMapping)

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:44](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L44)

___

### getOptions

▸ **getOptions**(): `undefined` \| [`CollectionOptions`](../wiki/@lotusengine.sdk.%3Cinternal%3E.CollectionOptions)

#### Returns

`undefined` \| [`CollectionOptions`](../wiki/@lotusengine.sdk.%3Cinternal%3E.CollectionOptions)

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:62](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L62)

___

### getQueries

▸ **getQueries**(): `undefined` \| [`CollectionQueries`](../wiki/@lotusengine.sdk.%3Cinternal%3E.CollectionQueries)

#### Returns

`undefined` \| [`CollectionQueries`](../wiki/@lotusengine.sdk.%3Cinternal%3E.CollectionQueries)

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:53](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L53)

___

### getSummary

▸ **getSummary**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:35](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L35)

___

### getTriggers

▸ **getTriggers**(): `undefined` \| [`CollectionTriggers`](../wiki/@lotusengine.sdk.%3Cinternal%3E.CollectionTriggers)

#### Returns

`undefined` \| [`CollectionTriggers`](../wiki/@lotusengine.sdk.%3Cinternal%3E.CollectionTriggers)

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:71](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L71)

___

### setLabel

▸ **setLabel**(`label`): [`Collection`](../wiki/@lotusengine.sdk.Collection)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`Collection`](../wiki/@lotusengine.sdk.Collection)

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:21](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L21)

___

### setMapping

▸ **setMapping**(`mapping`): [`Collection`](../wiki/@lotusengine.sdk.Collection)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mapping` | [`CollectionMapping`](../wiki/@lotusengine.sdk.%3Cinternal%3E.CollectionMapping) |

#### Returns

[`Collection`](../wiki/@lotusengine.sdk.Collection)

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:39](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L39)

___

### setOptions

▸ **setOptions**(`options`): [`Collection`](../wiki/@lotusengine.sdk.Collection)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`CollectionOptions`](../wiki/@lotusengine.sdk.%3Cinternal%3E.CollectionOptions) |

#### Returns

[`Collection`](../wiki/@lotusengine.sdk.Collection)

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:57](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L57)

___

### setQueries

▸ **setQueries**(`queries`): [`Collection`](../wiki/@lotusengine.sdk.Collection)

#### Parameters

| Name | Type |
| :------ | :------ |
| `queries` | [`CollectionQueries`](../wiki/@lotusengine.sdk.%3Cinternal%3E.CollectionQueries) |

#### Returns

[`Collection`](../wiki/@lotusengine.sdk.Collection)

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:48](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L48)

___

### setSummary

▸ **setSummary**(`summary`): [`Collection`](../wiki/@lotusengine.sdk.Collection)

#### Parameters

| Name | Type |
| :------ | :------ |
| `summary` | `string` |

#### Returns

[`Collection`](../wiki/@lotusengine.sdk.Collection)

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:30](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L30)

___

### setTriggers

▸ **setTriggers**(`triggers`): [`Collection`](../wiki/@lotusengine.sdk.Collection)

#### Parameters

| Name | Type |
| :------ | :------ |
| `triggers` | [`CollectionTriggers`](../wiki/@lotusengine.sdk.%3Cinternal%3E.CollectionTriggers) |

#### Returns

[`Collection`](../wiki/@lotusengine.sdk.Collection)

#### Defined in

[packages/sdk/src/components/core/collectionComponent.ts:66](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/collectionComponent.ts#L66)

___

### validateData

▸ **validateData**<`T`\>(`data`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `T` |

#### Returns

`T`

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[validateData](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#validatedata)

#### Defined in

[packages/sdk/src/components/base/baseComponent.ts:15](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/base/baseComponent.ts#L15)
