var rp = require('request-promise');

module.exports = function(config) {

    config = config || {};

    let defaultConfig = {
        url: config.url,
        json: true
    };

    let completeConfig = Object.assign({}, config, defaultConfig);

    function request(method, url, extraConfig) {
        return function cl(query, body) {
            let resquestConfig = JSON.parse(JSON.stringify(completeConfig));

            resquestConfig.method = method;
            resquestConfig.qs = query;
            resquestConfig.url += path;

            if (extraConfig) resquestConfig = Object.assign(resquestConfig, extraConfig);

            return rp(resquestConfig);

        }
    }
}
