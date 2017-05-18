'use strict'

module.exports = {
  id: '/res',
  title: 'Results',
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
        docs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                pattern: '^[a-zA-Z0-9-_]+$',
              },
              crt: { type: 'string' },
              etag: { type: 'string' },
              body: { type: 'object' },
            },
            required: ['id', 'crt', 'etag', 'body'],
            additionalProperties: false,
          },
        },
      },
      required: ['evt-id', 'col-id', 'ftc-id', 'docs'],
      additionalProperties: false,
    },
  },
  required: ['ftc'],
  additionalProperties: false,
}
