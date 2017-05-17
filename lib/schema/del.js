'use strict'

module.exports = {
  id: '/del',
  title: 'Delete',
  type: 'object',
  properties: {
    del: {
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
          },
          required: ['id'],
          additionalProperties: false,
        },
      },
      required: ['evt-id', 'col-id', 'doc-id'],
      additionalProperties: false,
    },
  },
  required: ['del'],
  additionalProperties: false,
}
