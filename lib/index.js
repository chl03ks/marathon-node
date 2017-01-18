const rp = require('request-promise');
const request = require('request');

const querystring = require('querystring');

const MARATHON_API_VERSION = '/v2'

const apps = require('./apps');
const deployments = require('./deployments');
const groups = require('./groups');
const tasks = require('./tasks');
const artifacts = require('./artifacts');
const events = require('./events');
const eventsSubscriptions = require('./eventSubscriptions');
const info = require('./info');
const leader = require('./leader');

module.exports = (url, config) => {
    config = config || {};

    let defaultConfig = {
        url: url,
        json: true
    };

    let completeConfig = Object.assign({}, config, defaultConfig);

    function request(method, endPoint, extraConfig, rqStream) {
        return cl(query, body) => {
            let resquestConfig = JSON.parse(JSON.stringify(completeConfig));

            resquestConfig = Object.assign(resquestConfig, {
                method: method,
                qs: query,
                body: body
            });

            endPoint = MARATHON_API_VERSION + querystring.escape(endPoint);

            resquestConfig.url += endPoint;

            if (extraConfig) resquestConfig = Object.assign(resquestConfig, extraConfig);

            if (requestStream) {
              return createPromise(resquestConfig);
            }

            return rp(resquestConfig);
        }
    }

    function createPromise(resquestConfig) {
      request[method.toLowerCase()](resquestConfig)
          .on('error', function onError(err) {
              return Promise.reject(err);
          })
          .on('response', function onResponse(readableStream) {
              readableStream.on('end', function onEnd() {
                  logTime();
              });
              return Promise.resolve(readableStream);
          });
    }

    let marathonAPI = {
        apps: apps(request),
        deployments: deployments(request),
        groups: groups(request),
        tasks: tasks(request),
        artifacts: artifacts(request),
        events: events(request),
        info: info(request),
        leader: info(leader)
    };

    return marathonAPI;
}
