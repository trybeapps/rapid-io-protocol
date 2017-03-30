'use strict'

module.exports = {
  id: '/dis',
  title: 'Disconnect',
  type: 'object',
  properties: {
    dis: {
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
  required: ['dis'],
  additionalProperties: false,
}
