'use strict'

const filter = require('../objects/filter')

const schemaId = '/obj/query'

module.exports = {
  id: schemaId,
  title: 'Query',
  type: 'object',
  properties: {
    filter: { $ref: filter.id },
    order: {
      type: "array",
      items: {
        type: "object",
        additionalProperties: {
          type: "string",
          enum: ["asc", "desc"],
        }
      }
    },
    limit: { type: "integer" },
    skip: { type: "integer" },
  }
}
