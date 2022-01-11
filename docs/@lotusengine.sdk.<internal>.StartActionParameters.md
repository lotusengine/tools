# Interface: StartActionParameters

[@lotusengine/sdk](../wiki/@lotusengine.sdk).[<internal>](../wiki/@lotusengine.sdk.%3Cinternal%3E).StartActionParameters

## Table of contents

### Properties

- [next](../wiki/@lotusengine.sdk.%3Cinternal%3E.StartActionParameters#next)
- [triggers](../wiki/@lotusengine.sdk.%3Cinternal%3E.StartActionParameters#triggers)

## Properties

### next

• `Optional` **next**: `string`

#### Defined in

[packages/types/src/types/action.ts:300](https://github.com/lotusengine/sdk/blob/f1f5297/packages/types/src/types/action.ts#L300)

___

### triggers

• `Optional` **triggers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `event?` | [`Partial`](../wiki/@lotusengine.sdk.%3Cinternal%3E#partial)<[`Record`](../wiki/@lotusengine.sdk.%3Cinternal%3E#record)<[`PublicEvent`](../wiki/@lotusengine.sdk.%3Cinternal%3E#publicevent), `unknown`\>\> |
| `schedule?` | [`StartActionScheduleTriggerParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.StartActionScheduleTriggerParameters) |
| `webhook?` | [`StartActionWebhookTriggerParameters`](../wiki/@lotusengine.sdk.%3Cinternal%3E.StartActionWebhookTriggerParameters) |

#### Defined in

[packages/types/src/types/action.ts:295](https://github.com/lotusengine/sdk/blob/f1f5297/packages/types/src/types/action.ts#L295)
