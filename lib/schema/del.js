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
        'del-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id', 'col-id', 'doc-id'],
      additionalProperties: false,
    },
  },
  required: ['del'],
  additionalProperties: false,
}
