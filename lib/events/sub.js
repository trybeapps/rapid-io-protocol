'use strict'

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
          pattern: '^[a-zA-Z0-9-_]*$',
        },
        'col-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]*$',
        },
        'sub-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]*$',
        },
        filter: { type: 'object' },
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
        limit: { type: 'integer' },
        skip: { type: 'integer' },
      },
      required: ['evt-id', 'col-id', 'sub-id'],
      additionalProperties: false,
    },
  },
  required: ['sub'],
  additionalProperties: false,
}
