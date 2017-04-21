'use strict'

const filter = require('../objects/filter')

const ack = require('../events/ack')
const err = require('../events/err')
const nop = require('../events/nop')
const con = require('../events/con')
const rec = require('../events/rec')
const dis = require('../events/dis')
const auth = require('../events/auth')
const unauth = require('../events/unauth')
const mut = require('../events/mut')
const sub = require('../events/sub')
const uns = require('../events/uns')
const val = require('../events/val')
const upd = require('../events/upd')

const Validator = require('jsonschema').Validator

const validator = new Validator()

validator.addSchema(filter, filter.id)

validator.addSchema(ack, ack.id)
validator.addSchema(err, err.id)
validator.addSchema(nop, nop.id)
validator.addSchema(con, con.id)
validator.addSchema(rec, rec.id)
validator.addSchema(dis, dis.id)
validator.addSchema(auth, auth.id)
validator.addSchema(unauth, unauth.id)
validator.addSchema(mut, mut.id)
validator.addSchema(sub, sub.id)
validator.addSchema(uns, uns.id)
validator.addSchema(val, val.id)
validator.addSchema(upd, upd.id)

const message = {
  id: '/message',
  title: 'Message',
  oneOf: [
    { $ref: ack.id },
    { $ref: err.id },
    { $ref: nop.id },
    { $ref: con.id },
    { $ref: rec.id },
    { $ref: dis.id },
    { $ref: auth.id },
    { $ref: unauth.id },
    { $ref: mut.id },
    { $ref: sub.id },
    { $ref: uns.id },
    { $ref: val.id },
    { $ref: upd.id },
  ],
}

validator.addSchema(message, message.id)

exports.message = str => validator.validate(str, message.id)
exports.filter = str => validator.validate(str, filter.id)
