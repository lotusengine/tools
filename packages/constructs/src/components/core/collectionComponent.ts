import { collectionSchema, ExtendedSchema } from '@lotusengine/schemas'
import { CollectionStackModel } from '@lotusengine/types'
import {
  CollectionMapping,
  CollectionOptions,
  CollectionQueries,
  CollectionTriggers
} from 'types/src/types/collection'
import BaseComponent from '../base/baseComponent'

export default class Collection extends BaseComponent {
  schema: ExtendedSchema = collectionSchema
  mapping: CollectionMapping | undefined
  queries: CollectionQueries | undefined
  options: CollectionOptions | undefined
  triggers: CollectionTriggers | undefined
  label: string | undefined
  summary: string | undefined

  setLabel(label: string): this {
    this.label = label
    return this
  }

  getLabel(): string | undefined {
    return this.label
  }

  setSummary(summary: string): this {
    this.summary = summary
    return this
  }

  getSummary(): string | undefined {
    return this.summary
  }

  setMapping(mapping: CollectionMapping): this {
    this.mapping = mapping
    return this
  }

  getMapping(): CollectionMapping | undefined {
    return this.mapping
  }

  setQueries(queries: CollectionQueries): this {
    this.queries = queries
    return this
  }

  getQueries(): CollectionQueries | undefined {
    return this.queries
  }

  setOptions(options: CollectionOptions): this {
    this.options = options
    return this
  }

  getOptions(): CollectionOptions | undefined {
    return this.options
  }

  setTriggers(triggers: CollectionTriggers): this {
    this.triggers = triggers
    return this
  }

  getTriggers(): CollectionTriggers | undefined {
    return this.triggers
  }

  getData(): CollectionStackModel {
    return {
      label: this.getLabel(),
      summary: this.getSummary(),
      mapping: this.getMapping(),
      options: this.getOptions(),
      queries: this.getQueries(),
      triggers: this.getTriggers()
    }
  }
}
