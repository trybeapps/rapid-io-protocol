'use strict'

module.exports = {
  id: '/nop',
  title: 'Acknowledge',
  type: 'object',
  properties: {
    nop: { type: 'null' },
  },
  required: ['nop'],
  additionalProperties: false,
}
