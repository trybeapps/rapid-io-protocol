'use strict'

module.exports = {
  id: '/schema/ca-ch',
  title: 'CancelChannel',
  type: 'object',
  properties: {
    'ca-ch': {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'chan-id': {
          type: 'string',
          minLength: 1,
          pattern: '^[a-zA-Z0-9-_\\^$*+?{}.,|\\[\\]\\(\\)]+$',
          format: 'regex',
        },
        'sub-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id', 'chan-id', 'sub-id'],
      additionalProperties: false,
    },
  },
  required: ['ca-ch'],
  additionalProperties: false,
}
