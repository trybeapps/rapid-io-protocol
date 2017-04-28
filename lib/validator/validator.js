'use strict'

const Ajv = require('ajv')

const filter = require('../objects/filter')
const query = require('../objects/query')

const ack = require('../events/ack')
const err = require('../events/err')
const nop = require('../events/nop')
const con = require('../events/con')
const rec = require('../events/rec')
const dis = require('../events/dis')
const auth = require('../events/auth')
const unauth = require('../events/unauth')
const mut = require('../events/mut')
const mer = require('../events/mer')
const sub = require('../events/sub')
const uns = require('../events/uns')
const val = require('../events/val')
const upd = require('../events/upd')
const ca = require('../events/ca')

const message = {
  id: '/message',
  title: 'Message',
  anyOf: [
    { $ref: ack.id },
    { $ref: err.id },
    { $ref: nop.id },
    { $ref: con.id },
    { $ref: rec.id },
    { $ref: dis.id },
    { $ref: auth.id },
    { $ref: unauth.id },
    { $ref: mut.id },
    { $ref: mer.id },
    { $ref: sub.id },
    { $ref: uns.id },
    { $ref: val.id },
    { $ref: upd.id },
    { $ref: ca.id },
  ],
}

const validator = new Ajv({
  allErrors: true,
  schemas: [
    filter,
    query,
    message,
    ack,
    err,
    nop,
    con,
    rec,
    dis,
    auth,
    unauth,
    mut,
    mer,
    sub,
    uns,
    val,
    upd,
    ca,
  ],
})

exports.message = validator.compile(message)
exports.filter = validator.compile(filter)
exports.query = validator.compile(query)
exports.filterScheme = filter
