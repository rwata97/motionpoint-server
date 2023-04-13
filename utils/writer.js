var ResponsePayload = function (code, payload) {
  this.code = code;
  this.payload = payload;
};

exports.respondWithCode = function (code, payload) {
  return new ResponsePayload(code, payload);
};

var writeJson = (exports.writeJson = function (response, arg1, arg2) {
  var code;
  var payload;
  const { url, query } = response.req;

  if (arg1 && arg1 instanceof ResponsePayload) {
    writeJson(response, arg1.payload, arg1.code);

    return;
  }

  if (arg2 && Number.isInteger(arg2)) {
    code = arg2;
  } else {
    if (arg1 && Number.isInteger(arg1)) {
      code = arg1;
    }
  }
  if (code && arg1) {
    payload = arg1;
  } else if (arg1) {
    payload = arg1;
  }

  if (!code) {
    // if no response code given, we default to 200
    code = 200;
  }

  if (query['changeset-id']) {
    payload = payload.filter(
      (obj) => obj['changeset-id'] === query['changeset-id']
    )[0];
  }

  if (query['limit']) {
    const { limit, offset } = query;
    payload.items = payload.items.slice(0 + offset, offset + limit);
  }

  if (!query['changeset-id'] && !query['limit']) {
    if (url === '/proxy-configs') {
      payload = payload;
    } else {
      payload = payload[0];
    }
  }

  if (typeof payload === 'object') {
    payload = JSON.stringify(payload, null, 2);
  }

  response.writeHead(code, { 'Content-Type': 'application/json' });
  // setTimeout(() => {
  response.end(payload);
  // }, 2000);
});
