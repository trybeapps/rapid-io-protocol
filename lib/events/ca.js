'use strict'

module.exports = {
  id: '/ca',
  title: 'Cancel',
  type: 'object',
  properties: {
    ca: {
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
      },
      required: ['evt-id', 'col-id', 'sub-id'],
      additionalProperties: false,
    },
  },
  required: ['ca'],
  additionalProperties: false,
}