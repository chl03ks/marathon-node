const rp = require('request-promise');

const MARATHON_API_VERSION = '/v2'

const apps = require('./apps');

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

            endPoint = MARATHON_API_VERSION + endPoint;

            resquestConfig.method = method;
            resquestConfig.qs = query;
            resquestConfig.url += endPoint;

            if (extraConfig) resquestConfig = Object.assign(resquestConfig, extraConfig);

            return rp(resquestConfig);

        }
    }

    let marathonAPI = {
        apps: apps(request)
    };

    return marathonAPI;
}
