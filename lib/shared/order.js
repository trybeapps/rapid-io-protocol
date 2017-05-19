'use strict'

module.exports = {
  id: '/obj/order',
  title: 'Order',
  type: 'array',
  items: {
    type: 'object',
    additionalProperties: {
      type: 'string',
      enum: ['asc', 'desc'],
    },
  },
}
