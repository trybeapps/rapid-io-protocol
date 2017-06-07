'use strict'

module.exports = {
  id: '/schema/ca-ch',
  title: 'CancelChannel',
  type: 'object',
  properties: {
    'ca-ch': {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'chan-id': {
          anyOf: [
            {
              type: 'string',
              pattern: '^[a-zA-Z0-9-_]+$',
            },
            {
              type: 'object',
              properties: {
                pref: {
                  type: 'string',
                  pattern: '^[a-zA-Z0-9-_]+$',
                },
              },
              required: ['pref'],
              additionalProperties: false,
            },
          ],
        },
        'sub-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id', 'chan-id', 'sub-id'],
      additionalProperties: false,
    },
  },
  required: ['ca-ch'],
  additionalProperties: false,
}
