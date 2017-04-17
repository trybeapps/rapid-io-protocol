'use strict'

const primitive = require('./primitive')

const schemaId = '/obj/filter'

module.exports = {
  id: schemaId,
  title: 'Filter',
  type: 'object',
  additionalProperties: {
    oneOf: [
      { $ref: primitive.id },
      { type: 'null' },
      {
        type: 'object',
        properties: {
          gt: { $ref: primitive.id },
          lt: { $ref: primitive.id },
          gte: { $ref: primitive.id },
          lte: { $ref: primitive.id },
          not: { $ref: schemaId.id },
        },
        additionalProperties: false,
      },
    ],
  },
}
