'use strict'

const shortid = require('shortid')

/**
 * Creates a delete protocol event
 * @param {string} colId collection id
 * @param {string} docId documend id
 * @return {Object} event
 */

const del = (colId, docId, etag) => ({
  del: {
    'evt-id': shortid(),
    'col-id': colId,
    doc: {
      id: docId,
      etag,
    },
  },
})

module.exports = del
