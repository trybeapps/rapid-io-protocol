'use strict'

const shortid = require('shortid')

/**
 * Creates cancel-channel event
 * @param {(String|Object)} chanId channel id
 * @param {String} subId subscription id
 */
const caCh = (chanId, subId) => ({
  'evt-id': shortid(),
  'chan-id': chanId,
  'sub-id': subId,
})

module.exports = caCh
