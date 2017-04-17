'use strict'

const schemaId = '/obj/filter'

const valPrimitive = {
  oneOf: [
    { type: 'string' },
    { type: 'number' },
    { type: 'boolean' },
  ],
}

const valPrimitiveFilter = {
  oneOf: [
    { type: 'string' },
    { type: 'number' },
    { type: 'boolean' },
    { type: 'null' },
    { $ref: schemaId },
  ],
}

module.exports = {
  id: schemaId,
  title: 'Filter',
  type: 'object',
  properties: {
    not: valPrimitiveFilter,
    and: valPrimitiveFilter,
    or: valPrimitiveFilter,
  },
  additionalProperties: {
    oneOf: [
      { type: 'string' },
      { type: 'number' },
      { type: 'boolean' },
      { type: 'null' },
      {
        type: 'object',
        properties: {
          gt: valPrimitive,
          lt: valPrimitive,
          gte: valPrimitive,
          lte: valPrimitive,
        },
        additionalProperties: false,
      },
    ],
  },
}
