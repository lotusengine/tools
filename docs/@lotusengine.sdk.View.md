# Class: View

[@lotusengine/sdk](../wiki/@lotusengine.sdk).View

## Hierarchy

- [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)

  ↳ **`View`**

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.sdk.View#constructor)

### Properties

- [label](../wiki/@lotusengine.sdk.View#label)
- [schema](../wiki/@lotusengine.sdk.View#schema)
- [summary](../wiki/@lotusengine.sdk.View#summary)

### Methods

- [generateHash](../wiki/@lotusengine.sdk.View#generatehash)
- [getData](../wiki/@lotusengine.sdk.View#getdata)
- [getLabel](../wiki/@lotusengine.sdk.View#getlabel)
- [getSummary](../wiki/@lotusengine.sdk.View#getsummary)
- [setLabel](../wiki/@lotusengine.sdk.View#setlabel)
- [setSummary](../wiki/@lotusengine.sdk.View#setsummary)
- [validateData](../wiki/@lotusengine.sdk.View#validatedata)

## Constructors

### constructor

• **new View**()

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[constructor](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#constructor)

## Properties

### label

• **label**: `undefined` \| `string`

#### Defined in

[packages/sdk/src/components/core/viewComponent.ts:7](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/viewComponent.ts#L7)

___

### schema

• **schema**: [`ExtendedSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#extendedschema) = `viewSchema`

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[schema](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#schema)

#### Defined in

[packages/sdk/src/components/core/viewComponent.ts:6](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/viewComponent.ts#L6)

___

### summary

• **summary**: `undefined` \| `string`

#### Defined in

[packages/sdk/src/components/core/viewComponent.ts:8](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/viewComponent.ts#L8)

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

▸ **getData**(): [`ViewStackModel`](../wiki/@lotusengine.sdk.%3Cinternal%3E#viewstackmodel)

#### Returns

[`ViewStackModel`](../wiki/@lotusengine.sdk.%3Cinternal%3E#viewstackmodel)

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[getData](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getdata)

#### Defined in

[packages/sdk/src/components/core/viewComponent.ts:28](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/viewComponent.ts#L28)

___

### getLabel

▸ **getLabel**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/sdk/src/components/core/viewComponent.ts:15](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/viewComponent.ts#L15)

___

### getSummary

▸ **getSummary**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/sdk/src/components/core/viewComponent.ts:24](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/viewComponent.ts#L24)

___

### setLabel

▸ **setLabel**(`label`): [`View`](../wiki/@lotusengine.sdk.View)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`View`](../wiki/@lotusengine.sdk.View)

#### Defined in

[packages/sdk/src/components/core/viewComponent.ts:10](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/viewComponent.ts#L10)

___

### setSummary

▸ **setSummary**(`summary`): [`View`](../wiki/@lotusengine.sdk.View)

#### Parameters

| Name | Type |
| :------ | :------ |
| `summary` | `string` |

#### Returns

[`View`](../wiki/@lotusengine.sdk.View)

#### Defined in

[packages/sdk/src/components/core/viewComponent.ts:19](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/viewComponent.ts#L19)

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
