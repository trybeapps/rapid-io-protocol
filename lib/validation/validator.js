'use strict'

const Ajv = require('ajv')

const filter = require('../schema/filter')
const query = require('../schema/query')

const ack = require('../schema/ack')
const err = require('../schema/err')
const nop = require('../schema/nop')
const con = require('../schema/con')
const rec = require('../schema/rec')
const dis = require('../schema/dis')
const auth = require('../schema/auth')
const deauth = require('../schema/deauth')
const mut = require('../schema/mut')
const mer = require('../schema/mer')
const del = require('../schema/del')
const sub = require('../schema/sub')
const uns = require('../schema/uns')
const val = require('../schema/val')
const upd = require('../schema/upd')
const rm = require('../schema/rm')
const ca = require('../schema/ca')

const event = {
  id: '/event',
  title: 'Event',
  anyOf: [
    { $ref: ack.id },
    { $ref: err.id },
    { $ref: nop.id },
    { $ref: con.id },
    { $ref: rec.id },
    { $ref: dis.id },
    { $ref: auth.id },
    { $ref: deauth.id },
    { $ref: mut.id },
    { $ref: mer.id },
    { $ref: del.id },
    { $ref: sub.id },
    { $ref: uns.id },
    { $ref: val.id },
    { $ref: upd.id },
    { $ref: rm.id },
    { $ref: ca.id },
  ],
}

const batch = {
  id: '/batch',
  title: 'Batch',
  type: 'object',
  properties: {
    batch: {
      type: 'array',
      minItems: 1,
      items: { $ref: event.id },
    },
  },
  required: ['batch'],
  additionalProperties: false,
}

const message = {
  id: '/message',
  title: 'Message',
  anyOf: [
    { $ref: event.id },
    { $ref: batch.id },
  ],
}

const validator = new Ajv({
  allErrors: true,
  schemas: [
    filter,
    query,
    event,
    ack,
    err,
    nop,
    con,
    rec,
    dis,
    auth,
    deauth,
    mut,
    mer,
    del,
    sub,
    uns,
    val,
    upd,
    rm,
    ca,
    batch,
    message,
  ],
})

exports.message = validator.compile(message)
exports.filter = validator.compile(filter)
exports.query = validator.compile(query)
