'use strict'

const shortid = require('shortid')

/**
 * Creates cancel event
 * @param {String} colId collection id
 * @param {String} subId subscription id
 */
const ca = (colId, subId) => ({
  ca: {
    'evt-id': shortid(),
    'col-id': colId,
    'sub-id': subId,
  },
})

module.exports = ca
