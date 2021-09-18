import {
  Action,
  ActionType,
  DecisionActionParameters,
  EchoActionParameters,
  EventActionParameters,
  LoopActionParameters,
  MergeActionParameters,
  MockActionParameters,
  ModuleActionParameters,
  NotifyActionParameters,
  QueryActionParameters,
  ReferrerActionParameters,
  RequestActionParameters,
  ReturnActionParameters,
  StoreActionParameters,
  ScriptActionParameters,
  SplitActionParameters,
  StartActionParameters,
  TemplateActionParameters,
  TokenActionParameters,
  TransformActionParameters,
  WaitActionParameters,
  WorkflowRequest
} from './action'
import { ISO8601DateTime, JSONData, UUID } from './common'

export interface DecisionAction extends Action {
  type: `${ActionType.DECISION}`
  parameters: DecisionActionParameters
}

export interface EchoAction extends Action {
  type: `${ActionType.ECHO}`
  parameters: EchoActionParameters
}

export interface EventAction extends Action {
  type: `${ActionType.EVENT}`
  parameters: EventActionParameters
}

export interface LoopAction extends Action {
  type: `${ActionType.LOOP}`
  parameters: LoopActionParameters
}

export interface MergeAction extends Action {
  type: `${ActionType.MERGE}`
  parameters: MergeActionParameters
}

export interface MockAction extends Action {
  type: `${ActionType.MOCK}`
  parameters: MockActionParameters
}

export interface ModuleAction extends Action {
  type: `${ActionType.MODULE}`
  parameters: ModuleActionParameters
}

export interface NotifyAction extends Action {
  type: `${ActionType.NOTIFY}`
  parameters: NotifyActionParameters
}

export interface QueryAction extends Action {
  type: `${ActionType.QUERY}`
  parameters: QueryActionParameters
}

export interface ReferrerAction extends Action {
  type: `${ActionType.REFERRER}`
  parameters: ReferrerActionParameters
}

export interface RequestAction extends Action {
  type: `${ActionType.REQUEST}`
  parameters: RequestActionParameters
}

export interface ReturnAction extends Action {
  type: `${ActionType.RETURN}`
  parameters: ReturnActionParameters
}

export interface StoreAction extends Action {
  type: `${ActionType.STORE}`
  parameters: StoreActionParameters
}

export interface ScriptAction extends Action {
  type: `${ActionType.SCRIPT}`
  parameters: ScriptActionParameters
}

export interface SplitAction extends Action {
  type: `${ActionType.SPLIT}`
  parameters: SplitActionParameters
}

export interface StartAction extends Action {
  type: `${ActionType.START}`
  parameters: StartActionParameters
}

export interface TemplateAction extends Action {
  type: `${ActionType.TEMPLATE}`
  parameters: TemplateActionParameters
}

export interface TokenAction extends Action {
  type: `${ActionType.TOKEN}`
  parameters: TokenActionParameters
}

export interface TransformAction extends Action {
  type: `${ActionType.TRANSFORM}`
  parameters: TransformActionParameters
}

export interface WaitAction extends Action {
  type: `${ActionType.WAIT}`
  parameters: WaitActionParameters
}

export type Actions =
  | DecisionAction
  | EchoAction
  | EventAction
  | LoopAction
  | MergeAction
  | MockAction
  | ModuleAction
  | NotifyAction
  | QueryAction
  | ReferrerAction
  | RequestAction
  | ReturnAction
  | StoreAction
  | ScriptAction
  | SplitAction
  | StartAction
  | TemplateAction
  | TokenAction
  | TransformAction
  | WaitAction

export interface WorkflowDefinition {
  [k: string]: Action
}

export type WorkflowModel = {
  id: UUID
  serviceId: UUID
  createdAt?: ISO8601DateTime
  updatedAt?: ISO8601DateTime
  label?: string
  hasWebhook?: boolean
  summary?: string
  definition: WorkflowDefinition
}

export type WorkflowStackModel = {
  label?: string
  hasWebhook?: boolean
  summary?: string
  definition: WorkflowDefinition
}

export type WorkflowUpsertInput = WorkflowCreateInput | WorkflowUpdateInput

export type WorkflowStackInput = {
  label?: string
  summary?: string
  definition?: JSONData
}

export type WorkflowCreateInput = {
  serviceId: UUID
  label?: string
  summary?: string
  definition?: WorkflowDefinition
}

export type WorkflowUpdateInput = {
  id: UUID
  serviceId?: UUID
  label?: string
  summary?: string
  definition?: WorkflowDefinition
}

export type WorkflowUpsertResult = void

export interface WorkflowDeployInput {
  label?: string
  summary?: string
  definition: WorkflowDefinition
}

export interface WorkflowTriggerParameters {
  accountId: UUID
  workflowId: UUID
  request: WorkflowRequest
}

export interface WorkflowFailParameters {
  accountId: UUID
  workflowId: UUID
}

export interface WorkflowCompleteParameters {
  accountId: UUID
  workflowId: UUID
}

export interface ScheduleEventParameters {
  accountId: UUID
  workflowId: UUID
}
