'use strict'

module.exports = {
  id: '/val',
  title: 'Value',
  type: 'object',
  properties: {
    val: {
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
        docs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                pattern: '^[a-zA-Z0-9-_]+$',
              },
              crt: { type: 'integer' },
              etag: { type: 'string' },
              skey: { type: 'array', items: { type: 'string' } },
              body: { type: 'object' },
            },
            required: ['id', 'crt', 'etag', 'body'],
            additionalProperties: false,
          },
        },
      },
      required: ['evt-id', 'col-id', 'sub-id', 'docs'],
      additionalProperties: false,
    },
  },
  required: ['val'],
  additionalProperties: false,
}
