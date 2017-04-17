'use strict'

const primitive = require('./primitive')

module.exports = {
  id: '/obj/filter',
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
        },
        additionalProperties: false,
      },
    ],
  },
}
