'use strict'

const scalar = require('./scalar')

module.exports = {
  id: '/obj/filter',
  title: 'Filter',
  type: 'object',
  additionalProperties: {
    oneOf: [
      { $ref: scalar.id },
      {
        type: 'object',
        properties: {
          gt: { $ref: scalar.id },
          lt: { $ref: scalar.id },
          gte: { $ref: scalar.id },
          lte: { $ref: scalar.id },
        },
        additionalProperties: false,
      },
    ],
  },
}
