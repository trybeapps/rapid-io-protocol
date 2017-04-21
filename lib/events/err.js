'use strict'

module.exports = {
  id: '/err',
  title: 'Error',
  type: 'object',
  properties: {
    err: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]*$',
        },
        'err-type': {
          type: {
            enum: [
              'client-error',
              'internal-error',
              'connection-terminated',
              'permission-denied',
              'invalid-auth-token',
            ],
          },
        },
        'err-msg': { type: 'string' },
      },
      required: ['evt-id', 'err-type', 'err-msg'],
      additionalProperties: false,
    },
  },
  required: ['err'],
  additionalProperties: false,
}
