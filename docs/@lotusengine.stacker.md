# Module: @lotusengine/stacker

## Table of contents

### Namespaces

- [&lt;internal\&gt;](../wiki/@lotusengine.stacker.%3Cinternal%3E)

### Variables

- [CONFIG\_NAME](../wiki/@lotusengine.stacker#config_name)
- [STACK\_NAME](../wiki/@lotusengine.stacker#stack_name)
- [STACK\_PATH](../wiki/@lotusengine.stacker#stack_path)

### Functions

- [loadStackData](../wiki/@lotusengine.stacker#loadstackdata)
- [prepareCollectionData](../wiki/@lotusengine.stacker#preparecollectiondata)
- [prepareServiceData](../wiki/@lotusengine.stacker#prepareservicedata)
- [prepareStack](../wiki/@lotusengine.stacker#preparestack)
- [prepareStackData](../wiki/@lotusengine.stacker#preparestackdata)
- [prepareViewData](../wiki/@lotusengine.stacker#prepareviewdata)
- [prepareWorkflowData](../wiki/@lotusengine.stacker#prepareworkflowdata)
- [readConfig](../wiki/@lotusengine.stacker#readconfig)
- [validateConfiguration](../wiki/@lotusengine.stacker#validateconfiguration)

## Variables

### CONFIG\_NAME

• **CONFIG\_NAME**: ``"lotusengine.json"``

#### Defined in

[packages/stacker/src/lib/config/configManager.ts:7](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/stacker/src/lib/config/configManager.ts#L7)

___

### STACK\_NAME

• **STACK\_NAME**: ``"stack.json"``

#### Defined in

[packages/stacker/src/lib/stack/stackGenerator.ts:19](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/stacker/src/lib/stack/stackGenerator.ts#L19)

___

### STACK\_PATH

• **STACK\_PATH**: ``".lotus"``

#### Defined in

[packages/stacker/src/lib/stack/stackGenerator.ts:20](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/stacker/src/lib/stack/stackGenerator.ts#L20)

## Functions

### loadStackData

▸ `Const` **loadStackData**(`options?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`StackLoadOptions`](../wiki/@lotusengine.stacker.%3Cinternal%3E#stackloadoptions) |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/stacker/src/lib/stack/stackGenerator.ts:88](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/stacker/src/lib/stack/stackGenerator.ts#L88)

___

### prepareCollectionData

▸ `Const` **prepareCollectionData**(`collection`): [`CollectionStackInput`](../wiki/@lotusengine.stacker.%3Cinternal%3E#collectionstackinput)

#### Parameters

| Name | Type |
| :------ | :------ |
| `collection` | [`CollectionStackModel`](../wiki/@lotusengine.stacker.%3Cinternal%3E#collectionstackmodel) |

#### Returns

[`CollectionStackInput`](../wiki/@lotusengine.stacker.%3Cinternal%3E#collectionstackinput)

#### Defined in

[packages/stacker/src/lib/stack/stackGenerator.ts:64](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/stacker/src/lib/stack/stackGenerator.ts#L64)

___

### prepareServiceData

▸ `Const` **prepareServiceData**(`service`): [`ServiceCreateInput`](../wiki/@lotusengine.stacker.%3Cinternal%3E#servicecreateinput)

#### Parameters

| Name | Type |
| :------ | :------ |
| `service` | [`ServiceStackModel`](../wiki/@lotusengine.stacker.%3Cinternal%3E#servicestackmodel) |

#### Returns

[`ServiceCreateInput`](../wiki/@lotusengine.stacker.%3Cinternal%3E#servicecreateinput)

#### Defined in

[packages/stacker/src/lib/stack/stackGenerator.ts:81](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/stacker/src/lib/stack/stackGenerator.ts#L81)

___

### prepareStack

▸ `Const` **prepareStack**(`stack`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `stack` | [`StackModel`](../wiki/@lotusengine.stacker.%3Cinternal%3E#stackmodel) |
| `options?` | [`StackPrepareOptions`](../wiki/@lotusengine.stacker.%3Cinternal%3E#stackprepareoptions) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/stacker/src/lib/stack/stackGenerator.ts:23](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/stacker/src/lib/stack/stackGenerator.ts#L23)

___

### prepareStackData

▸ `Const` **prepareStackData**(`input`): [`StackInput`](../wiki/@lotusengine.stacker.%3Cinternal%3E#stackinput)

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | [`StackModel`](../wiki/@lotusengine.stacker.%3Cinternal%3E#stackmodel) |

#### Returns

[`StackInput`](../wiki/@lotusengine.stacker.%3Cinternal%3E#stackinput)

#### Defined in

[packages/stacker/src/lib/stack/stackGenerator.ts:32](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/stacker/src/lib/stack/stackGenerator.ts#L32)

___

### prepareViewData

▸ `Const` **prepareViewData**(`view`): [`ViewStackInput`](../wiki/@lotusengine.stacker.%3Cinternal%3E#viewstackinput)

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | [`ViewStackModel`](../wiki/@lotusengine.stacker.%3Cinternal%3E#viewstackmodel) |

#### Returns

[`ViewStackInput`](../wiki/@lotusengine.stacker.%3Cinternal%3E#viewstackinput)

#### Defined in

[packages/stacker/src/lib/stack/stackGenerator.ts:76](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/stacker/src/lib/stack/stackGenerator.ts#L76)

___

### prepareWorkflowData

▸ `Const` **prepareWorkflowData**(`workflow`): [`WorkflowStackInput`](../wiki/@lotusengine.stacker.%3Cinternal%3E#workflowstackinput)

#### Parameters

| Name | Type |
| :------ | :------ |
| `workflow` | [`WorkflowStackModel`](../wiki/@lotusengine.stacker.%3Cinternal%3E#workflowstackmodel) |

#### Returns

[`WorkflowStackInput`](../wiki/@lotusengine.stacker.%3Cinternal%3E#workflowstackinput)

#### Defined in

[packages/stacker/src/lib/stack/stackGenerator.ts:57](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/stacker/src/lib/stack/stackGenerator.ts#L57)

___

### readConfig

▸ `Const` **readConfig**(`options?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`ReadConfigOptions`](../wiki/@lotusengine.stacker.%3Cinternal%3E#readconfigoptions) |

#### Returns

`Promise`<`any`\>

#### Defined in

[packages/stacker/src/lib/config/configManager.ts:10](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/stacker/src/lib/config/configManager.ts#L10)

___

### validateConfiguration

▸ `Const` **validateConfiguration**(`data`): [`Config`](../wiki/@lotusengine.stacker.%3Cinternal%3E#config)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`Config`](../wiki/@lotusengine.stacker.%3Cinternal%3E#config) |

#### Returns

[`Config`](../wiki/@lotusengine.stacker.%3Cinternal%3E#config)

#### Defined in

[packages/stacker/src/lib/config/configManager.ts:16](https://github.com/lotusengine/sdk/blob/fdb90a3/packages/stacker/src/lib/config/configManager.ts#L16)
