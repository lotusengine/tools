# Class: Module

[@lotusengine/sdk](../wiki/@lotusengine.sdk).Module

## Hierarchy

- [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)

  ↳ **`Module`**

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.sdk.Module#constructor)

### Properties

- [schema](../wiki/@lotusengine.sdk.Module#schema)

### Methods

- [generateHash](../wiki/@lotusengine.sdk.Module#generatehash)
- [getData](../wiki/@lotusengine.sdk.Module#getdata)
- [validateData](../wiki/@lotusengine.sdk.Module#validatedata)

## Constructors

### constructor

• **new Module**()

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[constructor](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#constructor)

## Properties

### schema

• **schema**: [`ExtendedSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#extendedschema) = `moduleSchema`

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[schema](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#schema)

#### Defined in

[packages/sdk/src/components/core/moduleComponent.ts:5](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/core/moduleComponent.ts#L5)

## Methods

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

▸ **getData**(): `Object`

#### Returns

`Object`

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[getData](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#getdata)

#### Defined in

[packages/sdk/src/components/core/moduleComponent.ts:6](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/core/moduleComponent.ts#L6)

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
