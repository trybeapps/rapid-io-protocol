'use strict'

const filter = require('./filter')

module.exports = {
  id: '/sub',
  title: 'Subscribe',
  type: 'object',
  properties: {
    sub: {
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
        'sub-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        filter: { $ref: filter.id },
        order: {
          type: 'array',
          items: {
            type: 'object',
            additionalProperties: {
              type: 'string',
              enum: ['asc', 'desc'],
            },
          },
        },
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
      required: ['evt-id', 'col-id', 'sub-id'],
      additionalProperties: false,
    },
  },
  required: ['sub'],
  additionalProperties: false,
}
