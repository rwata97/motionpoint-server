'use strict';


/**
 * Retrieve a proxy configuration
 *
 * xMotionCoreUserName String User name header
 * xMotionCoreQueue String Queue name header
 * changesetId Integer Changeset id. If not present the latest version is returned. (optional)
 * returns inline_response_200_1
 **/
exports.proxy_configGET = function(xMotionCoreUserName,xMotionCoreQueue,changesetId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "changeset-id" : 25,
  "config-text" : "# Configuration text here",
  "impact-index" : "HIGH",
  "change-type" : "ON-SITE-SEARCH",
  "line-number" : "25",
  "issue-number" : "1234.1",
  "version" : 40,
  "URL" : "http://www.motionpoint.com/",
  "desc" : "Descripton of configuration change."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a proxy configuration changeset.
 *
 * body Proxyconfig_body A changeset id is return if succesful. (optional)
 * xMotionCoreUserName String User name header
 * xMotionCoreQueue String Queue name header
 * returns inline_response_200_2
 **/
exports.proxy_configPOST = function(body,xMotionCoreUserName,xMotionCoreQueue) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "changeset-id" : 1,
  "config-text" : "# Configuration text here",
  "impact-index" : "HIGH",
  "change-type" : "ON-SITE-SEARCH",
  "line-number" : "25",
  "issue-number" : "1234.1",
  "version" : 40,
  "queue" : "EN.ES.1",
  "URL" : "http://www.motionpoint.com/",
  "desc" : "Descripton of configuration change."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve the versions of a proxy configuration
 *
 * xMotionCoreUserName String User name header
 * xMotionCoreQueue String Queue name header
 * limit Integer Limit the number of items returned. (optional)
 * offset Integer Offset to items returned. Starts at zero. (optional)
 * returns inline_response_200_3
 **/
exports.proxy_config_versionsGET = function(xMotionCoreUserName,xMotionCoreQueue,limit,offset) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "changeset-id" : 32,
  "impact-index" : "HIGH",
  "change-type" : "ON-SITE-SEARCH",
  "line-number" : "25",
  "issue-number" : "1234",
  "version" : 1,
  "created-by" : "Joe",
  "URL" : "http://www.motionpoint.com/",
  "date-created" : "2023-03-06T01:42:27.078Z",
  "desc" : "Descripton of configuration change."
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a list of available proxy configurations
 *
 * xMotionCoreUserName String User name header
 * returns List
 **/
exports.proxy_configsGET = function(xMotionCoreUserName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cn" : "BestBuy",
  "qn" : "EN.ES.1"
}, {
  "cn" : "BestBuy",
  "qn" : "EN.ES.1"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

