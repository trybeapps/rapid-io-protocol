'use strict'

const shortid = require('shortid')

/**
 * Create channel subscription event
 * @param {String} chanId channel id
 * @param {String} subId subscription id
 */
const subCh = (chanId, subId) => ({
  'evt-id': shortid(),
  'chan-id': chanId,
  'sub-id': subId,
})

module.exports = subCh
