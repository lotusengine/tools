export type Projection = Array<ProjectionField>

export type ProjectionField = ProjectionFieldText

export enum ProjectionFieldType {
  TEXT = 'text',
  LIST = 'list'
}

export interface ProjectionFieldCommon {
  path: string
  label: string
}

export interface ProjectionFieldText extends ProjectionFieldCommon {
  type: `${ProjectionFieldType.TEXT}`
}

export interface ProjectionFieldList extends ProjectionFieldCommon {
  type: `${ProjectionFieldType.LIST}`
}
