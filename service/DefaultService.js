'use strict';

/**
 * Retrieve a proxy configuration
 *
 * xMotionCoreUserName String User name header
 * xMotionCoreQueue String Queue name header
 * changesetId Integer Changeset id. If not present the latest version is returned. (optional)
 * returns inline_response_200_1
 **/
exports.proxy_configGET = function (
  xMotionCoreUserName,
  xMotionCoreQueue,
  changesetId
) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {
        'changeset-id': 32,
        'config-text':
          '################## DB PROPERTIES ##################\n' +
          '#local.host.name=escoffeycommunications.convertlanguage.com\n' +
          'local.host.name=es.example.com\n' +
          'local.dir.html=opt/websites/escoffeycommunicationsweb/wwwroot\n' +
          'local.domains=\\\n' +
          ' //example.cms.biz,\\\n' +
          ' //www.example.com,\\\n' +
          ' //cdn.cms.biz,\\\n' +
          ' //res.cloudhost.com/dpmykpsih/image/upload/\n' +
          '\n',
        version: 40,
        URL: 'http://www.motionpoint.com/',
        desc: 'Description of configuration change.',
      },
      {
        'changeset-id': 33,
        'config-text':
          '################## DB PROPERTIES ##################\n' +
          '#local.host.name=escoffeycommunications.convertlanguage.com\n' +
          'local.host.name=es.example.com\n' +
          'local.dir.html=opt/websites/escoffeycommunicationsweb/wwwroot\n' +
          'local.domains=\\\n' +
          ' //example.cms.biz,\\\n' +
          '\n',
        version: 40,
        URL: 'http://www.motionpoint.com/',
        desc: 'Description of configuration change.',
      },
      {
        'changeset-id': 34,
        'config-text':
          '################## DB PROPERTIES ##################\n' +
          ' //example.cms.biz,\\\n' +
          ' //www.example.com,\\\n' +
          ' //cdn.cms.biz,\\\n' +
          ' //res.cloudhost.com/dpmykpsih/image/upload/\n' +
          '\n',
        version: 47,
        URL: 'http://www.motionpoint.com/',
        desc: 'Description of configuration change.',
      },
    ];

    let res = changesetId ? changesetId : examples[Object.keys(examples)[0]];
    if (Object.keys(examples).length > 0) {
      resolve(res);
    } else {
      resolve();
    }
  });
};

/**
 * Add a proxy configuration changeset.
 *
 * body Proxyconfig_body A changeset id is return if succesful. (optional)
 * xMotionCoreUserName String User name header
 * xMotionCoreQueue String Queue name header
 * returns inline_response_200_2
 **/
exports.proxy_configPOST = function (
  body,
  xMotionCoreUserName,
  xMotionCoreQueue
) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = {
      'changeset-id': 1,
      'config-text': '# Configuration text here',
      'impact-index': 'HIGH',
      'change-type': 'ON-SITE-SEARCH',
      'line-number': '25',
      'issue-number': '1234.1',
      version: 40,
      queue: 'EN.ES.1',
      URL: 'http://www.motionpoint.com/',
      desc: 'Description of configuration change.',
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Retrieve the versions of a proxy configuration
 *
 * xMotionCoreUserName String User name header
 * xMotionCoreQueue String Queue name header
 * limit Integer Limit the number of items returned. (optional)
 * offset Integer Offset to items returned. Starts at zero. (optional)
 * returns List
 **/
exports.proxy_config_versionsGET = function (
  xMotionCoreUserName,
  xMotionCoreQueue,
  limit,
  offset
) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    const items = [
      {
        'changeset-id': 32,
        'impact-index': 'HIGH',
        'change-type': 'ON-SITE-SEARCH',
        'line-number': '25',
        'issue-number': '1234',
        version: 1,
        'created-by': 'Joe',
        URL: 'http://www.motionpoint.com/',
        'date-created': '2023-03-06T01:42:27.078Z',
        desc: 'Description of configuration change.',
      },
      {
        'changeset-id': 33,
        'impact-index': 'HIGH',
        'change-type': 'ON-SITE-SEARCH',
        'line-number': '25',
        'issue-number': '1234',
        version: 1,
        'created-by': 'Ben',
        URL: 'http://www.motionpoint.com/',
        'date-created': '2023-03-06T01:42:27.078Z',
        desc: 'Description of configuration change.',
      },
      {
        'changeset-id': 34,
        'impact-index': 'HIGH',
        'change-type': 'ON-SITE-SEARCH',
        'line-number': '25',
        'issue-number': '1234',
        version: 1,
        'created-by': 'Bob',
        URL: 'http://www.motionpoint.com/',
        'date-created': '2023-03-06T01:42:27.078Z',
        desc: 'Description of configuration change.',
      },
      {
        'changeset-id': 35,
        'impact-index': 'HIGH',
        'change-type': 'ON-SITE-SEARCH',
        'line-number': '25',
        'issue-number': '1234',
        version: 1,
        'created-by': 'Bill',
        URL: 'http://www.motionpoint.com/',
        'date-created': '2023-03-06T01:42:27.078Z',
        desc: 'Description of configuration change.',
      },
      {
        'changeset-id': 36,
        'impact-index': 'HIGH',
        'change-type': 'ON-SITE-SEARCH',
        'line-number': 'Smith',
        'issue-number': '1234',
        version: 1,
        'created-by': 'Joe',
        URL: 'http://www.motionpoint.com/',
        'date-created': '2023-03-06T01:42:27.078Z',
        desc: 'Description of configuration change.',
      },
      {
        'changeset-id': 37,
        'impact-index': 'HIGH',
        'change-type': 'ON-SITE-SEARCH',
        'line-number': '25',
        'issue-number': '1234',
        version: 1,
        'created-by': 'Body',
        URL: 'http://www.motionpoint.com/',
        'date-created': '2023-03-06T01:42:27.078Z',
        desc: 'Description of configuration change.',
      },
      {
        'changeset-id': 38,
        'impact-index': 'HIGH',
        'change-type': 'ON-SITE-SEARCH',
        'line-number': '25',
        'issue-number': '1234',
        version: 1,
        'created-by': 'Charlie',
        URL: 'http://www.motionpoint.com/',
        'date-created': '2023-03-06T01:42:27.078Z',
        desc: 'Description of configuration change.',
      },
      {
        'changeset-id': 39,
        'impact-index': 'HIGH',
        'change-type': 'ON-SITE-SEARCH',
        'line-number': '25',
        'issue-number': '1234',
        version: 1,
        'created-by': 'Lima',
        URL: 'http://www.motionpoint.com/',
        'date-created': '2023-03-06T01:42:27.078Z',
        desc: 'Description of configuration change.',
      },
      {
        'changeset-id': 40,
        'impact-index': 'HIGH',
        'change-type': 'ON-SITE-SEARCH',
        'line-number': '25',
        'issue-number': '1234',
        version: 1,
        'created-by': 'Zebra',
        URL: 'http://www.motionpoint.com/',
        'date-created': '2023-03-06T01:42:27.078Z',
        desc: 'Description of configuration change.',
      },
      {
        'changeset-id': 41,
        'impact-index': 'HIGH',
        'change-type': 'ON-SITE-SEARCH',
        'line-number': '25',
        'issue-number': '1234',
        version: 1,
        'created-by': 'Pi',
        URL: 'http://www.motionpoint.com/',
        'date-created': '2023-03-06T01:42:27.078Z',
        desc: 'Description of configuration change.',
      },
      {
        'changeset-id': 42,
        'impact-index': 'HIGH',
        'change-type': 'ON-SITE-SEARCH',
        'line-number': '25',
        'issue-number': '1234',
        version: 1,
        'created-by': 'Si',
        URL: 'http://www.motionpoint.com/',
        'date-created': '2023-03-06T01:42:27.078Z',
        desc: 'Description of configuration change.',
      },
      {
        'changeset-id': 43,
        'impact-index': 'HIGH',
        'change-type': 'ON-SITE-SEARCH',
        'line-number': '25',
        'issue-number': '1234',
        version: 1,
        'created-by': 'My',
        URL: 'http://www.motionpoint.com/',
        'date-created': '2023-03-06T01:42:27.078Z',
        desc: 'Description of configuration change.',
      },
      {
        'changeset-id': 44,
        'impact-index': 'HIGH',
        'change-type': 'ON-SITE-SEARCH',
        'line-number': '25',
        'issue-number': '1234',
        version: 1,
        'created-by': 'Rye',
        URL: 'http://www.motionpoint.com/',
        'date-created': '2023-03-06T01:42:27.078Z',
        desc: 'Description of configuration change.',
      },
      {
        'changeset-id': 45,
        'impact-index': 'HIGH',
        'change-type': 'ON-SITE-SEARCH',
        'line-number': '25',
        'issue-number': '1234',
        version: 1,
        'created-by': 'Ben',
        URL: 'http://www.motionpoint.com/',
        'date-created': '2023-03-06T01:42:27.078Z',
        desc: 'Description of configuration change.',
      },
    ];
    examples['application/json'] = {
      total: items.length,
      items: items,
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Retrieve a list of available proxy configurations
 *
 * xMotionCoreUserName String User name header
 * returns List
 **/
exports.proxy_configsGET = function (xMotionCoreUserName) {
  return new Promise(function (resolve, reject) {
    var examples = {};
    examples['application/json'] = [
      {
        cn: 'BestBuy',
        qn: 'EN.ES.1',
      },
      {
        cn: 'BestBuy',
        qn: 'EN.ES.1',
      },
      {
        cn: 'Uline',
        qn: 'EN.ES.MX.1',
      },
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};
