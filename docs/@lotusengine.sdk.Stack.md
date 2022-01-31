# Class: Stack

[@lotusengine/sdk](../wiki/@lotusengine.sdk).Stack

## Hierarchy

- [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)

  ↳ **`Stack`**

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.sdk.Stack#constructor)

### Properties

- [schema](../wiki/@lotusengine.sdk.Stack#schema)
- [stack](../wiki/@lotusengine.sdk.Stack#stack)

### Methods

- [addCollection](../wiki/@lotusengine.sdk.Stack#addcollection)
- [addView](../wiki/@lotusengine.sdk.Stack#addview)
- [addWorkflow](../wiki/@lotusengine.sdk.Stack#addworkflow)
- [generateHash](../wiki/@lotusengine.sdk.Stack#generatehash)
- [getData](../wiki/@lotusengine.sdk.Stack#getdata)
- [setService](../wiki/@lotusengine.sdk.Stack#setservice)
- [validateData](../wiki/@lotusengine.sdk.Stack#validatedata)

## Constructors

### constructor

• **new Stack**()

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[constructor](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#constructor)

## Properties

### schema

• **schema**: [`ExtendedSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#extendedschema) = `stackSchema`

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[schema](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#schema)

#### Defined in

[packages/sdk/src/components/core/stackComponent.ts:9](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/core/stackComponent.ts#L9)

___

### stack

• **stack**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `collections` | { `component`: [`Collection`](../wiki/@lotusengine.sdk.Collection) ; `key`: `string`  }[] |
| `service?` | `Object` |
| `service.component` | [`Service`](../wiki/@lotusengine.sdk.Service) |
| `service.key` | `string` |
| `views` | { `component`: [`View`](../wiki/@lotusengine.sdk.View) ; `key`: `string`  }[] |
| `workflows` | { `component`: [`Workflow`](../wiki/@lotusengine.sdk.Workflow) ; `key`: `string`  }[] |

#### Defined in

[packages/sdk/src/components/core/stackComponent.ts:10](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/core/stackComponent.ts#L10)

## Methods

### addCollection

▸ **addCollection**(`component`, `key`): [`Stack`](../wiki/@lotusengine.sdk.Stack)

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`Collection`](../wiki/@lotusengine.sdk.Collection) |
| `key` | `string` |

#### Returns

[`Stack`](../wiki/@lotusengine.sdk.Stack)

#### Defined in

[packages/sdk/src/components/core/stackComponent.ts:27](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/core/stackComponent.ts#L27)

___

### addView

▸ **addView**(`component`, `key`): [`Stack`](../wiki/@lotusengine.sdk.Stack)

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`View`](../wiki/@lotusengine.sdk.View) |
| `key` | `string` |

#### Returns

[`Stack`](../wiki/@lotusengine.sdk.Stack)

#### Defined in

[packages/sdk/src/components/core/stackComponent.ts:32](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/core/stackComponent.ts#L32)

___

### addWorkflow

▸ **addWorkflow**(`component`, `key`): [`Stack`](../wiki/@lotusengine.sdk.Stack)

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`Workflow`](../wiki/@lotusengine.sdk.Workflow) |
| `key` | `string` |

#### Returns

[`Stack`](../wiki/@lotusengine.sdk.Stack)

#### Defined in

[packages/sdk/src/components/core/stackComponent.ts:22](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/core/stackComponent.ts#L22)

___

### generateHash

▸ **generateHash**(): `string`

#### Returns

`string`

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[generateHash](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#generatehash)

#### Defined in

[packages/sdk/src/components/base/baseComponent.ts:9](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/baseComponent.ts#L9)

___

### getData

▸ **getData**(): [`StackModel`](../wiki/@lotusengine.sdk.%3Cinternal%3E#stackmodel)

#### Returns

[`StackModel`](../wiki/@lotusengine.sdk.%3Cinternal%3E#stackmodel)

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[getData](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getdata)

#### Defined in

[packages/sdk/src/components/core/stackComponent.ts:37](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/core/stackComponent.ts#L37)

___

### setService

▸ **setService**(`component`, `key`): [`Stack`](../wiki/@lotusengine.sdk.Stack)

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | [`Service`](../wiki/@lotusengine.sdk.Service) |
| `key` | `string` |

#### Returns

[`Stack`](../wiki/@lotusengine.sdk.Stack)

#### Defined in

[packages/sdk/src/components/core/stackComponent.ts:17](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/core/stackComponent.ts#L17)

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

[packages/sdk/src/components/base/baseComponent.ts:15](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/base/baseComponent.ts#L15)
