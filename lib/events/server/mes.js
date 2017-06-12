'use strict'

const shortid = require('shortid')

/**
 * Creates message event
 * @param {(String|Object)} chanId channel id
 * @param {String} subId subscription
 * @param {Object} body channel message
 */
const mes = (chanId, subId, body) => ({
  'evt-id': shortid(),
  'chan-id': chanId,
  'sub-id': subId,
  body,
})

module.exports = mes
