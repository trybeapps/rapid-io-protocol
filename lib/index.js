'use strict'

const ack = require('./events/ack')
const err = require('./events/err')
const nop = require('./events/nop')
const con = require('./events/con')
const rec = require('./events/rec')
const dis = require('./events/dis')
const mut = require('./events/mut')
const sub = require('./events/sub')
const val = require('./events/val')
const upd = require('./events/upd')

const Validator = require('jsonschema').Validator

const validator = new Validator()

const schemaMessage = {
  title: 'Message',
  oneOf: [
    { $ref: ack.id },
    { $ref: err.id },
    { $ref: nop.id },
    { $ref: con.id },
    { $ref: rec.id },
    { $ref: dis.id },
    { $ref: mut.id },
    { $ref: sub.id },
    { $ref: val.id },
    { $ref: upd.id },
  ],
}

validator.addSchema(ack, ack.id)
validator.addSchema(err, err.id)
validator.addSchema(nop, nop.id)
validator.addSchema(con, con.id)
validator.addSchema(rec, rec.id)
validator.addSchema(dis, dis.id)
validator.addSchema(mut, mut.id)
validator.addSchema(sub, sub.id)
validator.addSchema(val, val.id)
validator.addSchema(upd, upd.id)

exports.message = str => validator.validate(str, schemaMessage)
