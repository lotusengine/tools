# Class: Service

[@lotusengine/sdk](../wiki/@lotusengine.sdk).Service

## Hierarchy

- [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)

  ↳ **`Service`**

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.sdk.Service#constructor)

### Properties

- [description](../wiki/@lotusengine.sdk.Service#description)
- [label](../wiki/@lotusengine.sdk.Service#label)
- [parameters](../wiki/@lotusengine.sdk.Service#parameters)
- [schema](../wiki/@lotusengine.sdk.Service#schema)
- [settings](../wiki/@lotusengine.sdk.Service#settings)
- [summary](../wiki/@lotusengine.sdk.Service#summary)

### Methods

- [generateHash](../wiki/@lotusengine.sdk.Service#generatehash)
- [getData](../wiki/@lotusengine.sdk.Service#getdata)
- [getDefinition](../wiki/@lotusengine.sdk.Service#getdefinition)
- [getDescription](../wiki/@lotusengine.sdk.Service#getdescription)
- [getLabel](../wiki/@lotusengine.sdk.Service#getlabel)
- [getSettings](../wiki/@lotusengine.sdk.Service#getsettings)
- [getSummary](../wiki/@lotusengine.sdk.Service#getsummary)
- [setDefinition](../wiki/@lotusengine.sdk.Service#setdefinition)
- [setDescription](../wiki/@lotusengine.sdk.Service#setdescription)
- [setLabel](../wiki/@lotusengine.sdk.Service#setlabel)
- [setSettings](../wiki/@lotusengine.sdk.Service#setsettings)
- [setSummary](../wiki/@lotusengine.sdk.Service#setsummary)
- [validateData](../wiki/@lotusengine.sdk.Service#validatedata)

## Constructors

### constructor

• **new Service**()

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[constructor](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#constructor)

## Properties

### description

• **description**: `undefined` \| `string`

#### Defined in

[packages/sdk/src/components/core/serviceComponent.ts:23](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/serviceComponent.ts#L23)

___

### label

• **label**: `undefined` \| `string`

#### Defined in

[packages/sdk/src/components/core/serviceComponent.ts:21](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/serviceComponent.ts#L21)

___

### parameters

• **parameters**: [`ServiceSettings`](../wiki/@lotusengine.sdk.%3Cinternal%3E.ServiceSettings) = `{}`

#### Defined in

[packages/sdk/src/components/core/serviceComponent.ts:24](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/serviceComponent.ts#L24)

___

### schema

• **schema**: [`ExtendedSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#extendedschema) = `serviceSchema`

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[schema](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#schema)

#### Defined in

[packages/sdk/src/components/core/serviceComponent.ts:14](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/serviceComponent.ts#L14)

___

### settings

• **settings**: [`DynamicForm`](../wiki/@lotusengine.sdk.%3Cinternal%3E#dynamicform) = `[]`

#### Defined in

[packages/sdk/src/components/core/serviceComponent.ts:25](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/serviceComponent.ts#L25)

___

### summary

• **summary**: `undefined` \| `string`

#### Defined in

[packages/sdk/src/components/core/serviceComponent.ts:22](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/serviceComponent.ts#L22)

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

▸ **getData**(): [`ServiceStackModel`](../wiki/@lotusengine.sdk.%3Cinternal%3E#servicestackmodel)

#### Returns

[`ServiceStackModel`](../wiki/@lotusengine.sdk.%3Cinternal%3E#servicestackmodel)

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[getData](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getdata)

#### Defined in

[packages/sdk/src/components/core/serviceComponent.ts:72](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/serviceComponent.ts#L72)

___

### getDefinition

▸ **getDefinition**(): `undefined` \| [`DynamicForm`](../wiki/@lotusengine.sdk.%3Cinternal%3E#dynamicform)

#### Returns

`undefined` \| [`DynamicForm`](../wiki/@lotusengine.sdk.%3Cinternal%3E#dynamicform)

#### Defined in

[packages/sdk/src/components/core/serviceComponent.ts:68](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/serviceComponent.ts#L68)

___

### getDescription

▸ **getDescription**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/sdk/src/components/core/serviceComponent.ts:50](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/serviceComponent.ts#L50)

___

### getLabel

▸ **getLabel**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/sdk/src/components/core/serviceComponent.ts:32](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/serviceComponent.ts#L32)

___

### getSettings

▸ **getSettings**(): `undefined` \| [`ServiceSettings`](../wiki/@lotusengine.sdk.%3Cinternal%3E.ServiceSettings)

#### Returns

`undefined` \| [`ServiceSettings`](../wiki/@lotusengine.sdk.%3Cinternal%3E.ServiceSettings)

#### Defined in

[packages/sdk/src/components/core/serviceComponent.ts:59](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/serviceComponent.ts#L59)

___

### getSummary

▸ **getSummary**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/sdk/src/components/core/serviceComponent.ts:41](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/serviceComponent.ts#L41)

___

### setDefinition

▸ **setDefinition**(`settings`): [`Service`](../wiki/@lotusengine.sdk.Service)

#### Parameters

| Name | Type |
| :------ | :------ |
| `settings` | [`DynamicForm`](../wiki/@lotusengine.sdk.%3Cinternal%3E#dynamicform) |

#### Returns

[`Service`](../wiki/@lotusengine.sdk.Service)

#### Defined in

[packages/sdk/src/components/core/serviceComponent.ts:63](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/serviceComponent.ts#L63)

___

### setDescription

▸ **setDescription**(`description`): [`Service`](../wiki/@lotusengine.sdk.Service)

#### Parameters

| Name | Type |
| :------ | :------ |
| `description` | `string` |

#### Returns

[`Service`](../wiki/@lotusengine.sdk.Service)

#### Defined in

[packages/sdk/src/components/core/serviceComponent.ts:45](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/serviceComponent.ts#L45)

___

### setLabel

▸ **setLabel**(`label`): [`Service`](../wiki/@lotusengine.sdk.Service)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`Service`](../wiki/@lotusengine.sdk.Service)

#### Defined in

[packages/sdk/src/components/core/serviceComponent.ts:27](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/serviceComponent.ts#L27)

___

### setSettings

▸ **setSettings**(`parameters`): [`Service`](../wiki/@lotusengine.sdk.Service)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`ServiceSettings`](../wiki/@lotusengine.sdk.%3Cinternal%3E.ServiceSettings) |

#### Returns

[`Service`](../wiki/@lotusengine.sdk.Service)

#### Defined in

[packages/sdk/src/components/core/serviceComponent.ts:54](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/serviceComponent.ts#L54)

___

### setSummary

▸ **setSummary**(`summary`): [`Service`](../wiki/@lotusengine.sdk.Service)

#### Parameters

| Name | Type |
| :------ | :------ |
| `summary` | `string` |

#### Returns

[`Service`](../wiki/@lotusengine.sdk.Service)

#### Defined in

[packages/sdk/src/components/core/serviceComponent.ts:36](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/serviceComponent.ts#L36)

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
