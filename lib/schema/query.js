'use strict'

const filter = require('./filter')

const schemaId = '/obj/query'

module.exports = {
  id: schemaId,
  title: 'Query',
  type: 'object',
  properties: {
    filter: { $ref: filter.id },
    order: {
      type: 'array',
      minItems: 1,
      items: {
        type: 'object',
        additionalProperties: {
          type: 'string',
          enum: ['asc', 'desc'],
        },
        maxProperties: 1,
        minProperties: 1,
      },
    },
    limit: { type: 'integer' },
    skip: { type: 'integer' },
  },
  additionalProperties: false,
}
