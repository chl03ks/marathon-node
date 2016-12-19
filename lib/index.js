const rp = require('request-promise');
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
