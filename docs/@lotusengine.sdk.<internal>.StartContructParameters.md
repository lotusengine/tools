# Interface: StartContructParameters

[@lotusengine/sdk](../wiki/@lotusengine.sdk).[<internal>](../wiki/@lotusengine.sdk.%3Cinternal%3E).StartContructParameters

## Hierarchy

- [`Modify`](../wiki/@lotusengine.sdk.%3Cinternal%3E#modify)<[`StartActionParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.StartActionParameters), { `next?`: [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)<`any`, `any`\>  }\>

  ↳ **`StartContructParameters`**

## Table of contents

### Properties

- [next](../wiki/@lotusengine.sdk.%3Cinternal%3E.StartContructParameters#next)
- [triggers](../wiki/@lotusengine.sdk.%3Cinternal%3E.StartContructParameters#triggers)

## Properties

### next

• `Optional` **next**: [`default`](../wiki/@lotusengine.sdk.%3Cinternal%3E.default)<`any`, `any`\>

#### Inherited from

Modify.next

#### Defined in

[packages/sdk/src/types/common.ts:12](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/sdk/src/types/common.ts#L12)

___

### triggers

• `Optional` **triggers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event?` | [`Partial`](../wiki/@lotusengine.sdk.%3Cinternal%3E#partial)<[`Record`](../wiki/@lotusengine.sdk.%3Cinternal%3E#record)<[`PublicEvent`](../wiki/@lotusengine.sdk.%3Cinternal%3E#publicevent), `unknown`\>\> |
| `schedule?` | [`StartActionScheduleTriggerParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.StartActionScheduleTriggerParameters) |
| `webhook?` | [`StartActionWebhookTriggerParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.StartActionWebhookTriggerParameters) |

#### Inherited from

Modify.triggers

#### Defined in

[packages/types/src/types/action.ts:295](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/types/src/types/action.ts#L295)
