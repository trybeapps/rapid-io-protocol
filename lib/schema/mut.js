'use strict'

module.exports = {
  id: '/mut',
  title: 'Mutate',
  type: 'object',
  properties: {
    mut: {
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
            body: { type: 'object' },
          },
          required: ['id'],
          additionalProperties: false,
        },
      },
      required: ['evt-id', 'col-id', 'doc'],
      additionalProperties: false,
    },
  },
  required: ['mut'],
  additionalProperties: false,
}