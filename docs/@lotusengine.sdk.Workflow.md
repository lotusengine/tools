# Class: Workflow

[@lotusengine/sdk](../wiki/@lotusengine.sdk).Workflow

## Hierarchy

- [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)

  ↳ **`Workflow`**

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.sdk.Workflow#constructor)

### Properties

- [label](../wiki/@lotusengine.sdk.Workflow#label)
- [schema](../wiki/@lotusengine.sdk.Workflow#schema)
- [steps](../wiki/@lotusengine.sdk.Workflow#steps)
- [summary](../wiki/@lotusengine.sdk.Workflow#summary)

### Methods

- [addAction](../wiki/@lotusengine.sdk.Workflow#addaction)
- [generateHash](../wiki/@lotusengine.sdk.Workflow#generatehash)
- [getData](../wiki/@lotusengine.sdk.Workflow#getdata)
- [getLabel](../wiki/@lotusengine.sdk.Workflow#getlabel)
- [getSummary](../wiki/@lotusengine.sdk.Workflow#getsummary)
- [setLabel](../wiki/@lotusengine.sdk.Workflow#setlabel)
- [setSummary](../wiki/@lotusengine.sdk.Workflow#setsummary)
- [validateData](../wiki/@lotusengine.sdk.Workflow#validatedata)

## Constructors

### constructor

• **new Workflow**()

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[constructor](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#constructor)

## Properties

### label

• **label**: `undefined` \| `string`

#### Defined in

[packages/sdk/src/components/core/workflowComponent.ts:17](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/workflowComponent.ts#L17)

___

### schema

• **schema**: [`ExtendedSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#extendedschema) = `workflowSchema`

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[schema](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#schema)

#### Defined in

[packages/sdk/src/components/core/workflowComponent.ts:16](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/workflowComponent.ts#L16)

___

### steps

• `Protected` **steps**: `Object` = `{}`

#### Index signature

▪ [k: `string`]: [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)

#### Defined in

[packages/sdk/src/components/core/workflowComponent.ts:12](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/workflowComponent.ts#L12)

___

### summary

• **summary**: `undefined` \| `string`

#### Defined in

[packages/sdk/src/components/core/workflowComponent.ts:18](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/workflowComponent.ts#L18)

## Methods

### addAction

▸ **addAction**(`step`): [`Workflow`](../wiki/@lotusengine.sdk.Workflow)

#### Parameters

| Name | Type |
| :------ | :------ |
| `step` | [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)<[`ActionParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E#actionparameters), [`ActionContructParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E#actioncontructparameters)\> |

#### Returns

[`Workflow`](../wiki/@lotusengine.sdk.Workflow)

#### Defined in

[packages/sdk/src/components/core/workflowComponent.ts:38](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/workflowComponent.ts#L38)

___

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

▸ **getData**(): [`WorkflowStackModel`](../wiki/@lotusengine.sdk.%3Cinternal%3E#workflowstackmodel)

#### Returns

[`WorkflowStackModel`](../wiki/@lotusengine.sdk.%3Cinternal%3E#workflowstackmodel)

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[getData](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getdata)

#### Defined in

[packages/sdk/src/components/core/workflowComponent.ts:43](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/workflowComponent.ts#L43)

___

### getLabel

▸ **getLabel**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/sdk/src/components/core/workflowComponent.ts:25](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/workflowComponent.ts#L25)

___

### getSummary

▸ **getSummary**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

[packages/sdk/src/components/core/workflowComponent.ts:34](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/workflowComponent.ts#L34)

___

### setLabel

▸ **setLabel**(`label`): [`Workflow`](../wiki/@lotusengine.sdk.Workflow)

#### Parameters

| Name | Type |
| :------ | :------ |
| `label` | `string` |

#### Returns

[`Workflow`](../wiki/@lotusengine.sdk.Workflow)

#### Defined in

[packages/sdk/src/components/core/workflowComponent.ts:20](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/workflowComponent.ts#L20)

___

### setSummary

▸ **setSummary**(`summary`): [`Workflow`](../wiki/@lotusengine.sdk.Workflow)

#### Parameters

| Name | Type |
| :------ | :------ |
| `summary` | `string` |

#### Returns

[`Workflow`](../wiki/@lotusengine.sdk.Workflow)

#### Defined in

[packages/sdk/src/components/core/workflowComponent.ts:29](https://github.com/lotusengine/sdk/blob/f1f5297/packages/sdk/src/components/core/workflowComponent.ts#L29)

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
