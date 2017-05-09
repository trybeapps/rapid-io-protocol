'use strict'

module.exports = {
  id: '/upd',
  title: 'Update',
  type: 'object',
  properties: {
    upd: {
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
        doc: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              pattern: '^[a-zA-Z0-9-_]+$',
            },
            crt: { type: 'string' },
            etag: { type: 'string' },
            skey: { type: 'array', items: { type: 'string' } },
            body: { type: 'object' },
          },
          required: ['id', 'crt', 'etag', 'body'],
          additionalProperties: false,
        },
      },
      required: ['evt-id', 'col-id', 'sub-id', 'doc'],
      additionalProperties: false,
    },
  },
  required: ['upd'],
  additionalProperties: false,
}
