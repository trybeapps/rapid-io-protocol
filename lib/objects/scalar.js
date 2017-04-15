'use strict'

module.exports = {
  id: '/obj/filter/scalar',
  title: 'Scalar',
  oneOf: [
    {
      type: 'string',
    },
    {
      type: 'number',
    },
    {
      type: 'boolean',
    },
    {
      type: 'null',
    },
  ],
}
