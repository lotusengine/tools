import { SchemaObject } from 'ajv'
import { S, ObjectSchema, ArraySchema } from 'fluent-json-schema'

// JSON fluent schema and standard AJV schema
export type JsonSchema = S | ObjectSchema | ArraySchema | SchemaObject
