'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.proxy_configGET = function proxy_configGET(
  req,
  res,
  next,
  xMotionCoreUserName,
  xMotionCoreQueue,
  changesetId
) {
  Default.proxy_configGET(xMotionCoreUserName, xMotionCoreQueue, changesetId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.proxy_configPOST = function proxy_configPOST(
  req,
  res,
  next,
  body,
  xMotionCoreUserName,
  xMotionCoreQueue
) {
  Default.proxy_configPOST(body, xMotionCoreUserName, xMotionCoreQueue)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.proxy_config_versionsGET = function proxy_config_versionsGET(
  req,
  res,
  next,
  xMotionCoreUserName,
  xMotionCoreQueue,
  limit,
  offset
) {
  Default.proxy_config_versionsGET(
    xMotionCoreUserName,
    xMotionCoreQueue,
    limit,
    offset
  )
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.proxy_configsGET = function proxy_configsGET(
  req,
  res,
  next,
  xMotionCoreUserName
) {
  Default.proxy_configsGET(xMotionCoreUserName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
