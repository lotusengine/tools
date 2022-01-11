# Module: @lotusengine/core

## Table of contents

### Namespaces

- [&lt;internal\&gt;](../wiki/@lotusengine.core.%3Cinternal%3E)

### Classes

- [InvalidDataError](../wiki/@lotusengine.core.InvalidDataError)
- [LotusError](../wiki/@lotusengine.core.LotusError)
- [UnknownError](../wiki/@lotusengine.core.UnknownError)

### Functions

- [createHash](../wiki/@lotusengine.core#createhash)
- [deepClone](../wiki/@lotusengine.core#deepclone)
- [deepMerge](../wiki/@lotusengine.core#deepmerge)
- [getClient](../wiki/@lotusengine.core#getclient)
- [isEmpty](../wiki/@lotusengine.core#isempty)
- [isSame](../wiki/@lotusengine.core#issame)
- [isValidJSON](../wiki/@lotusengine.core#isvalidjson)
- [prettifyErrors](../wiki/@lotusengine.core#prettifyerrors)
- [removeEmptyProps](../wiki/@lotusengine.core#removeemptyprops)
- [toBoolean](../wiki/@lotusengine.core#toboolean)
- [typeCheck](../wiki/@lotusengine.core#typecheck)
- [validateData](../wiki/@lotusengine.core#validatedata)
- [wrapError](../wiki/@lotusengine.core#wraperror)

## Functions

### createHash

▸ `Const` **createHash**(`obj`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `object` |

#### Returns

`string`

#### Defined in

[packages/core/src/lib/primitiveUtils.ts:9](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/primitiveUtils.ts#L9)

___

### deepClone

▸ `Const` **deepClone**<`T`\>(`value`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

#### Returns

`T`

#### Defined in

[packages/core/src/lib/primitiveUtils.ts:21](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/primitiveUtils.ts#L21)

___

### deepMerge

▸ `Const` **deepMerge**<`TObject`, `TSource`\>(`object`, `source`): `TObject` & `TSource`

#### Type parameters

| Name |
| :------ |
| `TObject` |
| `TSource` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `TObject` |
| `source` | `TSource` |

#### Returns

`TObject` & `TSource`

#### Defined in

[packages/core/src/lib/primitiveUtils.ts:24](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/primitiveUtils.ts#L24)

▸ `Const` **deepMerge**<`TObject`, `TSource1`, `TSource2`\>(`object`, `source1`, `source2`): `TObject` & `TSource1` & `TSource2`

#### Type parameters

| Name |
| :------ |
| `TObject` |
| `TSource1` |
| `TSource2` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `TObject` |
| `source1` | `TSource1` |
| `source2` | `TSource2` |

#### Returns

`TObject` & `TSource1` & `TSource2`

#### Defined in

[packages/core/src/lib/primitiveUtils.ts:24](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/primitiveUtils.ts#L24)

▸ `Const` **deepMerge**<`TObject`, `TSource1`, `TSource2`, `TSource3`\>(`object`, `source1`, `source2`, `source3`): `TObject` & `TSource1` & `TSource2` & `TSource3`

#### Type parameters

| Name |
| :------ |
| `TObject` |
| `TSource1` |
| `TSource2` |
| `TSource3` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `TObject` |
| `source1` | `TSource1` |
| `source2` | `TSource2` |
| `source3` | `TSource3` |

#### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3`

#### Defined in

[packages/core/src/lib/primitiveUtils.ts:24](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/primitiveUtils.ts#L24)

▸ `Const` **deepMerge**<`TObject`, `TSource1`, `TSource2`, `TSource3`, `TSource4`\>(`object`, `source1`, `source2`, `source3`, `source4`): `TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

#### Type parameters

| Name |
| :------ |
| `TObject` |
| `TSource1` |
| `TSource2` |
| `TSource3` |
| `TSource4` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `TObject` |
| `source1` | `TSource1` |
| `source2` | `TSource2` |
| `source3` | `TSource3` |
| `source4` | `TSource4` |

#### Returns

`TObject` & `TSource1` & `TSource2` & `TSource3` & `TSource4`

#### Defined in

[packages/core/src/lib/primitiveUtils.ts:24](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/primitiveUtils.ts#L24)

▸ `Const` **deepMerge**(`object`, ...`otherArgs`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | `any` |
| `...otherArgs` | `any`[] |

#### Returns

`any`

#### Defined in

[packages/core/src/lib/primitiveUtils.ts:24](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/primitiveUtils.ts#L24)

___

### getClient

▸ `Const` **getClient**(`options?`): [`Ajv`](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`Partial`](../wiki/@lotusengine.core.%3Cinternal%3E#partial)<[`InstanceOptions`](../wiki/@lotusengine.core.%3Cinternal%3E#instanceoptions)\> |

#### Returns

[`Ajv`](../wiki/@lotusengine.core.%3Cinternal%3E.Ajv)

#### Defined in

[packages/core/src/lib/validatorUtils.ts:6](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/validatorUtils.ts#L6)

___

### isEmpty

▸ **isEmpty**(`value?`): `boolean`

Checks if value is empty. A value is considered empty unless it’s an arguments object, array, string, or
jQuery-like collection with a length greater than 0 or an object with own enumerable properties.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value?` | `any` | The value to inspect. |

#### Returns

`boolean`

Returns true if value is empty, else false.

#### Defined in

node_modules/@types/lodash/common/lang.d.ts:571

___

### isSame

▸ `Const` **isSame**(`o1`, `o2`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `o1` | `any` |
| `o2` | `any` |

#### Returns

`boolean`

#### Defined in

[packages/core/src/lib/primitiveUtils.ts:12](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/primitiveUtils.ts#L12)

___

### isValidJSON

▸ `Const` **isValidJSON**(`params`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `any` |

#### Returns

`boolean`

#### Defined in

[packages/core/src/lib/validatorUtils.ts:50](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/validatorUtils.ts#L50)

___

### prettifyErrors

▸ `Const` **prettifyErrors**(`issues`, `root?`): `string`[]

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `issues` | `any` | `undefined` |
| `root` | `string` | `'input'` |

#### Returns

`string`[]

#### Defined in

[packages/core/src/lib/validatorUtils.ts:19](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/validatorUtils.ts#L19)

___

### removeEmptyProps

▸ `Const` **removeEmptyProps**(`obj`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `obj` | `any` |

#### Returns

`any`

#### Defined in

[packages/core/src/lib/primitiveUtils.ts:15](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/primitiveUtils.ts#L15)

___

### toBoolean

▸ `Const` **toBoolean**(`flag`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flag` | `undefined` \| `string` \| `boolean` |

#### Returns

`boolean`

#### Defined in

[packages/core/src/lib/primitiveUtils.ts:52](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/primitiveUtils.ts#L52)

___

### typeCheck

▸ `Const` **typeCheck**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `unknown` |

#### Returns

`string`

#### Defined in

[packages/core/src/lib/primitiveUtils.ts:57](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/primitiveUtils.ts#L57)

___

### validateData

▸ `Const` **validateData**<`T`\>(`schema`, `data`, `opts?`): `T`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`JsonSchema`](../wiki/@lotusengine.core.%3Cinternal%3E#jsonschema) |
| `data` | `T` |
| `opts` | [`Partial`](../wiki/@lotusengine.core.%3Cinternal%3E#partial)<[`InstanceOptions`](../wiki/@lotusengine.core.%3Cinternal%3E#instanceoptions)\> |

#### Returns

`T`

#### Defined in

[packages/core/src/lib/validatorUtils.ts:27](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/validatorUtils.ts#L27)

___

### wrapError

▸ `Const` **wrapError**(`err`): [`LotusError`](../wiki/@lotusengine.core.LotusError)<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `err` | [`Error`](../wiki/@lotusengine.core.%3Cinternal%3E#error) \| [`ILotusError`](../wiki/@lotusengine.core.%3Cinternal%3E.ILotusError)<`any`\> |

#### Returns

[`LotusError`](../wiki/@lotusengine.core.LotusError)<`any`\>

#### Defined in

[packages/core/src/lib/errorUtils.ts:6](https://github.com/lotusengine/sdk/blob/f1f5297/packages/core/src/lib/errorUtils.ts#L6)
