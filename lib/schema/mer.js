'use strict'

module.exports = {
  id: '/mer',
  title: 'Merge',
  type: 'object',
  properties: {
    mer: {
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
        doc: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              pattern: '^[a-zA-Z0-9-_]+$',
            },
            etag: { type: 'string' },
            body: { type: 'object' },
          },
          required: ['id', 'body'],
          additionalProperties: false,
        },
      },
      required: ['evt-id', 'col-id', 'doc'],
      additionalProperties: false,
    },
  },
  required: ['mer'],
  additionalProperties: false,
}
