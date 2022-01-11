# Interface: RequestActionParameters

[@lotusengine/types](../wiki/@lotusengine.types).RequestActionParameters

## Table of contents

### Properties

- [headers](../wiki/@lotusengine.types.RequestActionParameters#headers)
- [method](../wiki/@lotusengine.types.RequestActionParameters#method)
- [next](../wiki/@lotusengine.types.RequestActionParameters#next)
- [options](../wiki/@lotusengine.types.RequestActionParameters#options)
- [output](../wiki/@lotusengine.types.RequestActionParameters#output)
- [query](../wiki/@lotusengine.types.RequestActionParameters#query)
- [result](../wiki/@lotusengine.types.RequestActionParameters#result)
- [url](../wiki/@lotusengine.types.RequestActionParameters#url)

## Properties

### headers

• `Optional` **headers**: [`Record`](../wiki/@lotusengine.types.%3Cinternal%3E#record)<`string`, `string`\>

#### Defined in

[packages/types/src/types/action.ts:265](https://github.com/lotusengine/sdk/blob/f1f5297/packages/types/src/types/action.ts#L265)

___

### method

• `Optional` **method**: ``"GET"`` \| ``"DELETE"`` \| ``"HEAD"`` \| ``"OPTIONS"`` \| ``"PATCH"`` \| ``"POST"`` \| ``"PUT"``

#### Defined in

[packages/types/src/types/action.ts:264](https://github.com/lotusengine/sdk/blob/f1f5297/packages/types/src/types/action.ts#L264)

___

### next

• `Optional` **next**: `string`

#### Defined in

[packages/types/src/types/action.ts:261](https://github.com/lotusengine/sdk/blob/f1f5297/packages/types/src/types/action.ts#L261)

___

### options

• `Optional` **options**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cache?` | `number` |

#### Defined in

[packages/types/src/types/action.ts:267](https://github.com/lotusengine/sdk/blob/f1f5297/packages/types/src/types/action.ts#L267)

___

### output

• `Optional` **output**: `unknown`

#### Defined in

[packages/types/src/types/action.ts:263](https://github.com/lotusengine/sdk/blob/f1f5297/packages/types/src/types/action.ts#L263)

___

### query

• `Optional` **query**: [`Record`](../wiki/@lotusengine.types.%3Cinternal%3E#record)<`string`, `string`\>

#### Defined in

[packages/types/src/types/action.ts:266](https://github.com/lotusengine/sdk/blob/f1f5297/packages/types/src/types/action.ts#L266)

___

### result

• `Optional` **result**: [`ParameterResultPath`](../wiki/@lotusengine.types#parameterresultpath)

#### Defined in

[packages/types/src/types/action.ts:262](https://github.com/lotusengine/sdk/blob/f1f5297/packages/types/src/types/action.ts#L262)

___

### url

• **url**: `string`

#### Defined in

[packages/types/src/types/action.ts:260](https://github.com/lotusengine/sdk/blob/f1f5297/packages/types/src/types/action.ts#L260)
