const rp = require('request-promise');

const MARATHON_API_VERSION = '/v2'

const apps = require('./apps');
const deployments = require('./deployments');

module.exports = function(url, config) {
  config = config || {};

  let defaultConfig = {
      url: url,
      json: true
  };

  let completeConfig = Object.assign({}, config, defaultConfig);

  function request(method, endPoint, extraConfig) {
    return function cl(query, body) {
      let resquestConfig = JSON.parse(JSON.stringify(completeConfig));

      resquestConfig = Object.assign(resquestConfig, {
        method: method,
        qs: query
        body: body
      };);

      endPoint = MARATHON_API_VERSION + endPoint;

      resquestConfig.url += endPoint;

      if (extraConfig) resquestConfig = Object.assign(resquestConfig, extraConfig);

      return rp(resquestConfig);
    }
  }

  let marathonAPI = {
    apps: apps(request),
    deployments: deployments(request)
  };

  return marathonAPI;
}
