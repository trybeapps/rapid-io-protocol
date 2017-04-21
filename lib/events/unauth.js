'use strict'

module.exports = {
  id: '/unauth',
  title: 'Unauthorize',
  type: 'object',
  properties: {
    auth: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]*$',
        },
      },
      required: ['evt-id'],
      additionalProperties: false,
    },
  },
  required: ['unauth'],
  additionalProperties: false,
}
