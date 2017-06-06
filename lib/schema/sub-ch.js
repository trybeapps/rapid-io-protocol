'use strict'

module.exports = {
  id: '/schema/sub-ch',
  title: 'SubscribeChannel',
  type: 'object',
  properties: {
    'sub-ch': {
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
  required: ['sub-ch'],
  additionalProperties: false,
}
