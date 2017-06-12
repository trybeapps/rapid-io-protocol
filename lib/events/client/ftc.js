'use strict'

const shortid = require('shortid')

/**
 * Creates a fetch protocol event
 * @param {string} ftc fetch id
 * @param {string} colId collection id
 * @param {object=} query query object
 * @return {Object} event
 */

const ftc = (colId, { filter, order, limit, skip }) => ({
  ftc: {
    'evt-id': shortid(),
    'ftc-id': shortid(),
    'col-id': colId,
    filter,
    order: order && [order],
    limit,
    skip,
  },
})

module.exports = ftc
