'use strict'

const shortid = require('shortid')

/**
 * Creates message event
 * @param {String} chanId channel id
 * @param {String} subId subscription
 * @param {Object} body document
 */
const mes = (chanId, subId, body) => ({
  'evt-id': shortid(),
  'chan-id': chanId,
  'sub-id': subId,
  body,
})

module.exports = mes
