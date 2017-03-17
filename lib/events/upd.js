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
        doc: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              pattern: '^[a-zA-Z0-9-_]*$',
            },
            body: { type: 'object' },
          },
          required: ['id', 'body'],
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
