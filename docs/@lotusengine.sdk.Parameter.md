# Class: Parameter

[@lotusengine/sdk](../wiki/@lotusengine.sdk).Parameter

## Hierarchy

- [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)

  ↳ **`Parameter`**

## Table of contents

### Constructors

- [constructor](../wiki/@lotusengine.sdk.Parameter#constructor)

### Properties

- [schema](../wiki/@lotusengine.sdk.Parameter#schema)

### Methods

- [generateHash](../wiki/@lotusengine.sdk.Parameter#generatehash)
- [getData](../wiki/@lotusengine.sdk.Parameter#getdata)
- [validateData](../wiki/@lotusengine.sdk.Parameter#validatedata)

## Constructors

### constructor

• **new Parameter**()

#### Inherited from

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[constructor](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#constructor)

## Properties

### schema

• **schema**: [`ExtendedSchema`](../wiki/@lotusengine.sdk.%3Cinternal%3E#extendedschema) = `parameterSchema`

#### Overrides

[default](../wiki/@lotusengine.sdk.%3Cinternal%3E.default).[schema](../wiki/@lotusengine.sdk.%3Cinternal%3E.default#schema)

#### Defined in

[packages/sdk/src/components/core/parameterComponent.ts:5](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/core/parameterComponent.ts#L5)

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

[packages/sdk/src/components/core/parameterComponent.ts:7](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/components/core/parameterComponent.ts#L7)

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
