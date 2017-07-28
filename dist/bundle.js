'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var ajv$1 = _interopDefault(require('ajv'));
var shortid = _interopDefault(require('shortid'));

var schemaId = '/shared/filter';

var valPrimitive = {
  oneOf: [
    { type: 'string' },
    { type: 'number' },
    { type: 'boolean' } ],
};

var valPrimitiveFilter = {
  $ref: schemaId,
};

var filter = {
  id: schemaId,
  title: 'Filter',
  type: 'object',
  properties: {
    not: valPrimitiveFilter,
    and: {
      type: 'array',
      items: valPrimitiveFilter,
      minItems: 1,
    },
    or: {
      type: 'array',
      items: valPrimitiveFilter,
      minItems: 1,
    },
  },
  additionalProperties: {
    oneOf: [
      { type: 'string' },
      { type: 'number' },
      { type: 'boolean' },
      { type: 'null' },
      {
        type: 'object',
        properties: {
          gt: valPrimitive,
          lt: valPrimitive,
          gte: valPrimitive,
          lte: valPrimitive,
          cnt: { type: 'string' },
          pref: { type: 'string' },
          suf: { type: 'string' },
          'arr-cnt': valPrimitive,
        },
        maxProperties: 1,
        minProperties: 1,
        additionalProperties: false,
      } ],
  },
  maxProperties: 1,
  minProperties: 1,
};

var order = {
  id: '/shared/order',
  title: 'Order',
  type: 'array',
  items: {
    type: 'object',
    additionalProperties: {
      type: 'string',
      enum: ['asc', 'desc'],
    },
  },
};

var limit = {
  id: '/shared/limit',
  title: 'Limit',
  type: 'integer',
  minimum: 1,
  maximum: 500,
};

var skip = {
  id: '/shared/skip',
  title: 'Skip',
  type: 'integer',
  minimum: 0,
};

var schemaId$1 = '/schema/query';

var query = {
  id: schemaId$1,
  title: 'Query',
  type: 'object',
  properties: {
    filter: { $ref: filter.id },
    order: { $ref: order.id },
    limit: { $ref: limit.id },
    skip: { $ref: skip.id },
  },
  additionalProperties: false,
};

var ack = {
  id: '/schema/ack',
  title: 'Acknowledge',
  type: 'object',
  properties: {
    ack: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id'],
      additionalProperties: false,
    },
  },
  required: ['ack'],
  additionalProperties: false,
};

var err = {
  id: '/schema/err',
  title: 'Error',
  type: 'object',
  properties: {
    err: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'err-type': {
          type: 'string',
          enum: [
            'client-error',
            'internal-error',
            'connection-terminated',
            'permission-denied',
            'invalid-auth-token',
            'etag-conflict' ],
        },
        'err-msg': { type: 'string' },
      },
      required: ['evt-id', 'err-type', 'err-msg'],
      additionalProperties: false,
    },
  },
  required: ['err'],
  additionalProperties: false,
};

var nop = {
  id: '/schema/nop',
  title: 'Acknowledge',
  type: 'object',
  properties: {
    nop: { type: 'null' },
  },
  required: ['nop'],
  additionalProperties: false,
};

var con = {
  id: '/schema/con',
  title: 'Connection',
  type: 'object',
  properties: {
    con: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'con-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id', 'con-id'],
      additionalProperties: false,
    },
  },
  required: ['con'],
  additionalProperties: false,
};

var rec = {
  id: '/schema/rec',
  title: 'Reconnection',
  type: 'object',
  properties: {
    rec: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'con-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id', 'con-id'],
      additionalProperties: false,
    },
  },
  required: ['rec'],
  additionalProperties: false,
};

var dis = {
  id: '/schema/dis',
  title: 'Disconnect',
  type: 'object',
  properties: {
    dis: { type: 'null' },
  },
  required: ['dis'],
  additionalProperties: false,
};

var auth = {
  id: '/schema/auth',
  title: 'Authorize',
  type: 'object',
  properties: {
    auth: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        token: { type: 'string' },
      },
      required: ['evt-id', 'token'],
      additionalProperties: false,
    },
  },
  required: ['auth'],
  additionalProperties: false,
};

var deauth = {
  id: '/schema/deauth',
  title: 'Deauthorize',
  type: 'object',
  properties: {
    deauth: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id'],
      additionalProperties: false,
    },
  },
  required: ['deauth'],
  additionalProperties: false,
};

var mut = {
  id: '/schema/mut',
  title: 'Mutate',
  type: 'object',
  properties: {
    mut: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'col-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        doc: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              pattern: '^[a-zA-Z0-9-_]+$',
            },
            etag: {
              anyOf: [
                { type: 'null' },
                { type: 'string' } ],
            },
            body: { type: 'object' },
          },
          required: ['id', 'body'],
          additionalProperties: false,
        },
      },
      required: ['col-id', 'doc'],
      additionalProperties: false,
    },
  },
  required: ['mut'],
  additionalProperties: false,
};

var mer = {
  id: '/schema/mer',
  title: 'Merge',
  type: 'object',
  properties: {
    mer: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'col-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        doc: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              pattern: '^[a-zA-Z0-9-_]+$',
            },
            etag: {
              anyOf: [
                { type: 'null' },
                { type: 'string' } ],
            },
            body: { type: 'object' },
          },
          required: ['id', 'body'],
          additionalProperties: false,
        },
      },
      required: ['col-id', 'doc'],
      additionalProperties: false,
    },
  },
  required: ['mer'],
  additionalProperties: false,
};

var del = {
  id: '/schema/del',
  title: 'Delete',
  type: 'object',
  properties: {
    del: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'col-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        doc: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              pattern: '^[a-zA-Z0-9-_]+$',
            },
            etag: {
              anyOf: [
                { type: 'null' },
                { type: 'string' } ],
            },
          },
          required: ['id'],
          additionalProperties: false,
        },
      },
      required: ['col-id', 'doc'],
      additionalProperties: false,
    },
  },
  required: ['del'],
  additionalProperties: false,
};

var da = {
  id: '/schema/da',
  title: 'DisconnectAction',
  type: 'object',
  properties: {
    da: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'act-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        act: {
          anyOf: [
            { $ref: mer.id },
            { $ref: mut.id },
            { $ref: del.id } ],
        },
      },
      required: ['evt-id', 'act-id', 'act'],
      additionalProperties: false,
    },
  },
  required: ['da'],
  additionalProperties: false,
};

var daCa = {
  id: '/schema/da-ca',
  title: 'CancelDisconnectAction',
  type: 'object',
  properties: {
    'da-ca': {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'act-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id', 'act-id'],
      additionalProperties: false,
    },
  },
  required: ['da-ca'],
  additionalProperties: false,
};

var pub = {
  id: '/schema/pub',
  title: 'Publish',
  type: 'object',
  properties: {
    pub: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'chan-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        body: {
          type: 'object',
        },
      },
      required: ['evt-id', 'chan-id', 'body'],
      additionalProperties: false,
    },
  },
  required: ['pub'],
  additionalProperties: false,
};

var ftc = {
  id: '/schema/ftc',
  title: 'Fetch',
  type: 'object',
  properties: {
    ftc: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'col-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'ftc-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        filter: { $ref: filter.id },
        order: { $ref: order.id },
        limit: { $ref: limit.id },
        skip: { $ref: skip.id },
      },
      required: ['evt-id', 'col-id', 'ftc-id'],
      additionalProperties: false,
    },
  },
  required: ['ftc'],
  additionalProperties: false,
};

var sub = {
  id: '/schema/sub',
  title: 'Subscribe',
  type: 'object',
  properties: {
    sub: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'col-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'sub-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        filter: { $ref: filter.id },
        order: { $ref: order.id },
        limit: { $ref: limit.id },
        skip: { $ref: skip.id },
      },
      required: ['evt-id', 'col-id', 'sub-id'],
      additionalProperties: false,
    },
  },
  required: ['sub'],
  additionalProperties: false,
};

var uns = {
  id: '/schema/uns',
  title: 'Unsubscribe',
  type: 'object',
  properties: {
    uns: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'sub-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id', 'sub-id'],
      additionalProperties: false,
    },
  },
  required: ['uns'],
  additionalProperties: false,
};

var subCh = {
  id: '/schema/sub-ch',
  title: 'SubscribeChannel',
  type: 'object',
  properties: {
    'sub-ch': {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'chan-id': {
          anyOf: [
            {
              type: 'string',
              pattern: '^[a-zA-Z0-9-_]+$',
            },
            {
              type: 'object',
              properties: {
                pref: {
                  type: 'string',
                  pattern: '^[a-zA-Z0-9-_]+$',
                },
              },
              required: ['pref'],
              additionalProperties: false,
            } ],
        },
        'sub-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id', 'chan-id', 'sub-id'],
      additionalProperties: false,
    },
  },
  required: ['sub-ch'],
  additionalProperties: false,
};

var unsCh = {
  id: '/schema/uns-ch',
  title: 'UnsubscribeChannel',
  type: 'object',
  properties: {
    'uns-ch': {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'sub-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id', 'sub-id'],
      additionalProperties: false,
    },
  },
  required: ['uns-ch'],
  additionalProperties: false,
};

var res = {
  id: '/schema/res',
  title: 'Results',
  type: 'object',
  properties: {
    res: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'col-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'ftc-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        docs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                pattern: '^[a-zA-Z0-9-_]+$',
              },
              crt: { type: 'string' },
              'crt-ts': { type: 'integer' },
              'mod-ts': { type: 'integer' },
              etag: { type: 'string' },
              body: { type: 'object' },
            },
            required: ['id', 'crt', 'crt-ts', 'mod-ts', 'etag', 'body'],
            additionalProperties: false,
          },
        },
      },
      required: ['evt-id', 'col-id', 'ftc-id', 'docs'],
      additionalProperties: false,
    },
  },
  required: ['res'],
  additionalProperties: false,
};

var val = {
  id: '/schema/val',
  title: 'Value',
  type: 'object',
  properties: {
    val: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'col-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'sub-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        docs: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: {
                type: 'string',
                pattern: '^[a-zA-Z0-9-_]+$',
              },
              crt: { type: 'string' },
              'crt-ts': { type: 'integer' },
              'mod-ts': { type: 'integer' },
              etag: { type: 'string' },
              skey: { type: 'array', items: { type: 'string' } },
              body: { type: 'object' },
            },
            required: ['id', 'crt', 'crt-ts', 'mod-ts', 'etag', 'body'],
            additionalProperties: false,
          },
        },
      },
      required: ['evt-id', 'col-id', 'sub-id', 'docs'],
      additionalProperties: false,
    },
  },
  required: ['val'],
  additionalProperties: false,
};

var upd = {
  id: '/schema/upd',
  title: 'Update',
  type: 'object',
  properties: {
    upd: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'col-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'sub-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        doc: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              pattern: '^[a-zA-Z0-9-_]+$',
            },
            crt: { type: 'string' },
            'crt-ts': { type: 'integer' },
            'mod-ts': { type: 'integer' },
            etag: { type: 'string' },
            skey: { type: 'array', items: { type: 'string' } },
            body: { type: 'object' },
          },
          required: ['id', 'crt', 'crt-ts', 'mod-ts', 'etag', 'body'],
          additionalProperties: false,
        },
      },
      required: ['evt-id', 'col-id', 'sub-id', 'doc'],
      additionalProperties: false,
    },
  },
  required: ['upd'],
  additionalProperties: false,
};

var rm = {
  id: '/schema/rm',
  title: 'Remove',
  type: 'object',
  properties: {
    rm: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'col-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'sub-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        doc: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              pattern: '^[a-zA-Z0-9-_]+$',
            },
          },
          required: ['id'],
          additionalProperties: false,
        },
      },
      required: ['evt-id', 'col-id', 'sub-id', 'doc'],
      additionalProperties: false,
    },
  },
  required: ['rm'],
  additionalProperties: false,
};

var ca = {
  id: '/schema/ca',
  title: 'Cancel',
  type: 'object',
  properties: {
    ca: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'sub-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id', 'sub-id'],
      additionalProperties: false,
    },
  },
  required: ['ca'],
  additionalProperties: false,
};

var caCh = {
  id: '/schema/ca-ch',
  title: 'CancelChannel',
  type: 'object',
  properties: {
    'ca-ch': {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'sub-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id', 'sub-id'],
      additionalProperties: false,
    },
  },
  required: ['ca-ch'],
  additionalProperties: false,
};

var caDa = {
  id: '/schema/ca-da',
  title: 'DisconnectActionCancelled',
  type: 'object',
  properties: {
    'ca-da': {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'act-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id', 'act-id'],
      additionalProperties: false,
    },
  },
  required: ['ca-da'],
  additionalProperties: false,
};

var mes = {
  id: '/schema/mes',
  title: 'MessageChannel',
  type: 'object',
  properties: {
    mes: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'chan-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        'sub-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        body: {
          type: 'object',
        },
      },
      required: ['evt-id', 'chan-id', 'sub-id', 'body'],
      additionalProperties: false,
    },
  },
  required: ['mes'],
  additionalProperties: false,
};

var reqTs = {
  id: '/schema/req-ts',
  title: 'Request timestamp',
  type: 'object',
  properties: {
    'req-ts': {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
      },
      required: ['evt-id'],
      additionalProperties: false,
    },
  },
  required: ['req-ts'],
  additionalProperties: false,
};

var ts = {
  id: '/schema/ts',
  title: 'Timestamp',
  type: 'object',
  properties: {
    ts: {
      type: 'object',
      properties: {
        'evt-id': {
          type: 'string',
          pattern: '^[a-zA-Z0-9-_]+$',
        },
        timestamp: {
          type: 'number',
        },
      },
      required: ['evt-id', 'timestamp'],
      additionalProperties: false,
    },
  },
  required: ['ts'],
  additionalProperties: false,
};

var event = {
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
    { $ref: da.id },
    { $ref: daCa.id },
    { $ref: pub.id },
    { $ref: ftc.id },
    { $ref: sub.id },
    { $ref: uns.id },
    { $ref: subCh.id },
    { $ref: unsCh.id },
    { $ref: res.id },
    { $ref: val.id },
    { $ref: upd.id },
    { $ref: rm.id },
    { $ref: ca.id },
    { $ref: caCh.id },
    { $ref: caDa.id },
    { $ref: mes.id },
    { $ref: reqTs.id },
    { $ref: ts.id } ],
};

var batch = {
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
};

var message = {
  id: '/message',
  title: 'Message',
  anyOf: [
    { $ref: event.id },
    { $ref: batch.id } ],
};

var validator = new ajv$1({
  allErrors: true,
  schemas: [
    filter,
    order,
    limit,
    skip,
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
    da,
    daCa,
    ftc,
    sub,
    uns,
    res,
    val,
    upd,
    rm,
    ca,
    caCh,
    caDa,
    batch,
    message,
    pub,
    mes,
    subCh,
    unsCh,
    reqTs,
    ts ],
});

var message_1 = validator.compile(message);
var filter_1 = validator.compile(filter);
var query_1 = validator.compile(query);

var validator_1 = {
	message: message_1,
	filter: filter_1,
	query: query_1
};

var index$2 = validator_1;

var ack$3 = function (ref) {
  var evtId = ref.evtId;

  return ({
  ack: { 'evt-id': evtId },
});
};

var err$3 = function (ref) {
  var evtId = ref.evtId;
  var errType = ref.errType;
  var errMessage = ref.errMessage;

  return ({
  err: {
    'evt-id': evtId,
    'err-type': errType,
    'err-msg': errMessage,
  },
});
};

/**
 * Creates a connect protocol event
 * @param {String} conId connection id
 * @return {Object} event
 */

var con$3 = function (ref) {
  var conId = ref.conId;

  return ({
  con: {
    'evt-id': shortid(),
    'con-id': conId,
  },
});
};

var con_1 = con$3;

/**
 * Creates a reconnect protocol event
 * @param {string} conId connection id
 * @return {Object} event
 */

var rec$3 = function (ref) {
  var conId = ref.conId;

  return ({
  rec: {
    'evt-id': shortid(),
    'con-id': conId,
  },
});
};

var rec_1 = rec$3;

/**
 * Creates a disconnect protocol event
 * @return {Object} event
 */

var dis$3 = function () { return ({
  dis: null,
}); };

var dis_1 = dis$3;

/**
 *
 * @param {string} colId collection ID
 * @param {string} docId document ID
 * @param {object} body properties to mutate
 * @return {Object} event
 */

var mut$2 = function (ref) {
  var colId = ref.colId;
  var docId = ref.docId;
  var body = ref.body;
  var etag = ref.etag; if ( etag === void 0 ) etag = undefined;

  return ({
  mut: {
    'evt-id': shortid(),
    'col-id': colId,
    doc: {
      id: docId,
      etag: etag,
      body: body,
    },
  },
});
};

var mut_1 = mut$2;

/**
 * Creates a merge protocol event
 * @param {String} colId collection id
 * @param {String} docId documend id
 * @param {Object} body properties to merge
 * @return {Object} event
 */

var mer$2 = function (ref) {
  var colId = ref.colId;
  var docId = ref.docId;
  var body = ref.body;
  var etag = ref.etag; if ( etag === void 0 ) etag = undefined;

  return ({
  mer: {
    'evt-id': shortid(),
    'col-id': colId,
    doc: {
      id: docId,
      etag: etag,
      body: body,
    },
  },
});
};

var mer_1 = mer$2;

/**
 * Creates a delete protocol event
 * @param {Object} del
 * @param {String} del.colId - collection id
 * @param {String} del.docId - documend id
 * @param {String=} del.etag - documend id
 * @return {Object} event
 */

var del$2 = function (ref) {
  var colId = ref.colId;
  var docId = ref.docId;
  var etag = ref.etag; if ( etag === void 0 ) etag = undefined;

  return ({
  del: {
    'evt-id': shortid(),
    'col-id': colId,
    doc: {
      id: docId,
      etag: etag,
    },
  },
});
};

var del_1 = del$2;

/**
 * Creates an on-disconnect action protocol event
 * @param {string} actId On-disconnect action id
 * @param {object=} action One of mutate, merge or delete
 * @return {Object} event
 */

var da$3 = function (ref) {
  var actId = ref.actId;
  var action = ref.action;

  return ({
  da: {
    'evt-id': shortid(),
    'act-id': actId,
    act: action,
  },
});
};

var da_1 = da$3;

/**
 * Creates an cancel on-disconnect action protocol event
 * @param {string} actId action id
 * @return {Object} event
 */

var daCa$3 = function (ref) {
  var actId = ref.actId;

  return ({
  'da-ca': {
    'evt-id': shortid(),
    'act-id': actId,
  },
});
};

var daCa_1 = daCa$3;

/**
 * Creates a fetch protocol event
 * @param {String} ftc fetch id
 * @param {String} colId collection id
 * @param {object=} query query object
 * @return {Object} event
 */

var ftc$3 = function (ref) {
  var colId = ref.colId;
  var ftcId = ref.ftcId;
  var ref_query = ref.query; if ( ref_query === void 0 ) ref_query = {};
  var ref_query$1 = ref_query;
  var filter = ref_query$1.filter;
  var order = ref_query$1.order;
  var limit = ref_query$1.limit;
  var skip = ref_query$1.skip;

  return ({
  ftc: {
    'evt-id': shortid(),
    'ftc-id': ftcId,
    'col-id': colId,
    filter: filter,
    order: order && [order],
    limit: limit,
    skip: skip,
  },
});
};

var ftc_1 = ftc$3;

/**
 * Creates a subscription protocol event
 * @param {string} subId subscription id
 * @param {string} colId collection id
 * @param {object=} query query object
 * @return {Object} event
 */

var sub$3 = function (ref) {
  var subId = ref.subId;
  var colId = ref.colId;
  var ref_query = ref.query; if ( ref_query === void 0 ) ref_query = {};
  var ref_query$1 = ref_query;
  var filter = ref_query$1.filter;
  var order = ref_query$1.order;
  var limit = ref_query$1.limit;
  var skip = ref_query$1.skip;

  return ({
  sub: {
    'evt-id': shortid(),
    'sub-id': subId,
    'col-id': colId,
    filter: filter,
    order: order && [order], // we enforce Object, but server expects array
    limit: limit,
    skip: skip,
  },
});
};

var sub_1 = sub$3;

/**
 * Creates an unsubscribe protocl event
 * @param {string} subId subscription id
 * @return {Object} event
 */

var uns$3 = function (ref) {
  var subId = ref.subId;

  return ({
  uns: {
    'evt-id': shortid(),
    'sub-id': subId,
  },
});
};

var uns_1 = uns$3;

/**
 * Creates an autharization protocol event
 * @param {string} token authorization token
 * @return {Object} event
 */

var auth$3 = function (ref) {
  var token = ref.token;

  return ({
  auth: {
    'evt-id': shortid(),
    token: token,
  },
});
};

var auth_1 = auth$3;

/**
 * Creates an deauthorization protocol event
 * @return {Object} event
 */

var deauth$3 = function () { return ({
  deauth: {
    'evt-id': shortid(),
  },
}); };

var deauth_1 = deauth$3;

/**
 * No operation event
 * @return {Object} event
 */

var nop$3 = function () { return ({
  nop: null,
}); };

var nop_1 = nop$3;

/**
 * Creates publish event
 * @param {(String|Object)} chanId channel id
 * @param {Object} body channel message
 */
var pub$3 = function (ref) {
  var chanId = ref.chanId;
  var body = ref.body;

  return ({
  pub: {
    'evt-id': shortid(),
    'chan-id': chanId,
    body: body,
  },
});
};

var pub_1 = pub$3;

/**
 * Create channel subscription event
 * @param {(String|Object)} chanId channel id
 * @param {String} subId subscription id
 */
var subCh$3 = function (ref) {
  var chanId = ref.chanId;
  var subId = ref.subId;

  return ({
  'sub-ch': {
    'evt-id': shortid(),
    'chan-id': chanId,
    'sub-id': subId,
  },
});
};

var subCh_1 = subCh$3;

/**
 * Create channel unsubscription event
 * @param {String} subId subscription id
 */
var unsCh$3 = function (ref) {
  var subId = ref.subId;

  return ({
  'uns-ch': {
    'evt-id': shortid(),
    'sub-id': subId,
  },
});
};

var unsCh_1 = unsCh$3;

/**
 * Create request server timestamp event
 */
var reqTs$3 = function () { return ({
  'req-ts': {
    'evt-id': shortid(),
  },
}); };

var reqTs_1 = reqTs$3;

var index$4 = {
  con: con_1,
  rec: rec_1,
  dis: dis_1,
  mut: mut_1,
  mer: mer_1,
  del: del_1,
  da: da_1,
  daCa: daCa_1,
  ftc: ftc_1,
  sub: sub_1,
  uns: uns_1,
  auth: auth_1,
  deauth: deauth_1,
  nop: nop_1,
  pub: pub_1,
  subCh: subCh_1,
  unsCh: unsCh_1,
  reqTs: reqTs_1,
};

/**
 * Create results event
 * @param {String} colId collection id
 * @param {String} ftcId fetch id
 * @param {Array} docs documents to be sent
 */
var res$3 = function (ref) {
  var colId = ref.colId;
  var ftcId = ref.ftcId;
  var docs = ref.docs;

  return ({
  res: {
    'evt-id': shortid(),
    'col-id': colId,
    'ftc-id': ftcId,
    docs: docs,
  },
});
};

var res_1 = res$3;

/**
 * Creates value event
 * @param {String} colId collection id
 * @param {String} subId subscription id
 * @param {Array} docs documents to be sent
 */
var val$3 = function (ref) {
  var colId = ref.colId;
  var subId = ref.subId;
  var docs = ref.docs;

  return ({
  val: {
    'evt-id': shortid(),
    'col-id': colId,
    'sub-id': subId,
    docs: docs,
  },
});
};

var val_1 = val$3;

/**
 * Creates update event
 * @param {String} colId collection id
 * @param {String} subId subscription id
 * @param {Object} doc document
 */
var upd$3 = function (ref) {
  var colId = ref.colId;
  var subId = ref.subId;
  var doc = ref.doc;

  return ({
  upd: {
    'evt-id': shortid(),
    'col-id': colId,
    'sub-id': subId,
    doc: doc,
  },
});
};

var upd_1 = upd$3;

/**
 * Creates remove event
 * @param {String} colId collection id
 * @param {String} subId subscription id
 * @param {id} id document id to be deleted
 */
var rm$3 = function (ref) {
  var colId = ref.colId;
  var subId = ref.subId;
  var docId = ref.docId;

  return ({
  rm: {
    'evt-id': shortid(),
    'col-id': colId,
    'sub-id': subId,
    doc: {
      id: docId,
    },
  },
});
};

var rm_1 = rm$3;

/**
 * Creates cancel event
 * @param {String} subId subscription id
 */
var ca$3 = function (ref) {
  var subId = ref.subId;

  return ({
  ca: {
    'evt-id': shortid(),
    'sub-id': subId,
  },
});
};

var ca_1 = ca$3;

/**
 * Creates cancel-channel event
 * @param {String} subId subscription id
 */
var caCh$3 = function (ref) {
  var subId = ref.subId;

  return ({
  'ca-ch': {
    'evt-id': shortid(),
    'sub-id': subId,
  },
});
};

var caCh_1 = caCh$3;

/**
 * Creates on-disconnect action cancelled event
 * @param {String} actId On-disconnect action id
 */
var caDa$3 = function (ref) {
  var actId = ref.actId;

  return ({
  'ca-da': {
    'evt-id': shortid(),
    'act-id': actId,
  },
});
};

var caDa_1 = caDa$3;

/**
 * Creates message event
 * @param {(String|Object)} chanId channel id
 * @param {String} subId subscription
 * @param {Object} body channel message
 */
var mes$3 = function (ref) {
  var chanId = ref.chanId;
  var subId = ref.subId;
  var body = ref.body;

  return ({
  mes: {
    'evt-id': shortid(),
    'chan-id': chanId,
    'sub-id': subId,
    body: body,
  },
});
};

var mes_1 = mes$3;

/**
 * Creates message event
 * @param {Number} timestamp server timestamp
 */
var ts$3 = function (ref) {
  var timestamp = ref.timestamp;

  return ({
  ts: {
    'evt-id': shortid(),
    timestamp: timestamp,
  },
});
};

var ts_1 = ts$3;

var index$6 = {
  res: res_1,
  val: val_1,
  upd: upd_1,
  rm: rm_1,
  ca: ca_1,
  caCh: caCh_1,
  caDa: caDa_1,
  mes: mes_1,
  ts: ts_1,
};

var index = {
  validate: index$2,
  ack: ack$3,
  err: err$3,
  client: index$4,
  server: index$6,
  filterSchema: filter,
};

module.exports = index;
