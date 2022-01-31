# Interface: RequestContructParameters

[@lotusengine/sdk](../wiki/@lotusengine.sdk).[<internal>](../wiki/@lotusengine.sdk.%3Cinternal%3E).RequestContructParameters

## Hierarchy

- [`Modify`](../wiki/@lotusengine.sdk.%3Cinternal%3E#modify)<[`RequestActionParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.RequestActionParameters), { `next?`: [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)<`any`, `any`\>  }\>

  ↳ **`RequestContructParameters`**

## Table of contents

### Properties

- [headers](../wiki/@lotusengine.sdk.%3Cinternal%3E.RequestContructParameters#headers)
- [method](../wiki/@lotusengine.sdk.%3Cinternal%3E.RequestContructParameters#method)
- [next](../wiki/@lotusengine.sdk.%3Cinternal%3E.RequestContructParameters#next)
- [options](../wiki/@lotusengine.sdk.%3Cinternal%3E.RequestContructParameters#options)
- [output](../wiki/@lotusengine.sdk.%3Cinternal%3E.RequestContructParameters#output)
- [query](../wiki/@lotusengine.sdk.%3Cinternal%3E.RequestContructParameters#query)
- [result](../wiki/@lotusengine.sdk.%3Cinternal%3E.RequestContructParameters#result)
- [url](../wiki/@lotusengine.sdk.%3Cinternal%3E.RequestContructParameters#url)

## Properties

### headers

• `Optional` **headers**: [`Record`](../wiki/@lotusengine.sdk.%3Cinternal%3E#record)<`string`, `string`\>

#### Inherited from

Modify.headers

#### Defined in

[packages/types/src/types/action.ts:265](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/types/src/types/action.ts#L265)

___

### method

• `Optional` **method**: ``"GET"`` \| ``"DELETE"`` \| ``"HEAD"`` \| ``"OPTIONS"`` \| ``"PATCH"`` \| ``"POST"`` \| ``"PUT"``

#### Inherited from

Modify.method

#### Defined in

[packages/types/src/types/action.ts:264](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/types/src/types/action.ts#L264)

___

### next

• `Optional` **next**: [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)<`any`, `any`\>

#### Inherited from

Modify.next

#### Defined in

[packages/sdk/src/types/common.ts:15](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/types/common.ts#L15)

___

### options

• `Optional` **options**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cache?` | `number` |

#### Inherited from

Modify.options

#### Defined in

[packages/types/src/types/action.ts:267](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/types/src/types/action.ts#L267)

___

### output

• `Optional` **output**: `unknown`

#### Inherited from

Modify.output

#### Defined in

[packages/types/src/types/action.ts:263](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/types/src/types/action.ts#L263)

___

### query

• `Optional` **query**: [`Record`](../wiki/@lotusengine.sdk.%3Cinternal%3E#record)<`string`, `string`\>

#### Inherited from

Modify.query

#### Defined in

[packages/types/src/types/action.ts:266](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/types/src/types/action.ts#L266)

___

### result

• `Optional` **result**: [`ParameterResultPath`](../wiki/@lotusengine.sdk.%3Cinternal%3E#parameterresultpath)

#### Inherited from

Modify.result

#### Defined in

[packages/types/src/types/action.ts:262](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/types/src/types/action.ts#L262)

___

### url

• **url**: `string`

#### Inherited from

Modify.url

#### Defined in

[packages/types/src/types/action.ts:260](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/types/src/types/action.ts#L260)
