'use strict'

const validator = require('../lib')

describe('protocol events', () => {
  it('should succesfully validate acknowledge', () => {
    const ack = {
      ack: {
        'evt-id': '<EVENT ID>',
      },
    }

    expect(validator.message(ack)).toBeTruthy()
  })
})
