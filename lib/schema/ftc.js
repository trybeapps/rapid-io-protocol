'use strict'

const filter = require('../shared/filter')
const order = require('../shared/order')

module.exports = {
  id: '/ftc',
  title: 'Fetch',
  type: 'object',
  properties: {
    ftc: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'col-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'ftc-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        filter: { $ref: filter.id },
        order: { $ref: order.id },
        limit: {
          type: 'integer',
          minimum: 1,
          maximum: 250,
        },
        skip: {
          type: 'integer',
          minimum: 0,
        },
      },
      required: ['evt-id', 'col-id', 'ftc-id'],
      additionalProperties: false,
    },
  },
  required: ['ftc'],
  additionalProperties: false,
}
