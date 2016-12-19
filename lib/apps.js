module.exports = function allMethods(request) {
    let methods = {
        getList: (query) => {
            return request('GET', '/apps')(query);
        },
        create: (body) => {
            return request('POST', '/apps')(null, body);
        },
        getById: (id, query) => {
            return request('POST', '/apps/' + id)(query);
        },
        updateById: (id, body, force) => {
            return request('PUT', '/apps/' + id)({ force: force }, body);
        },
        destroyById: (id, force) => {
            return request('PUT', '/apps/' + id)({ force: force });
        },
        restart: (id, force) => {
          return request('POST', '/apps/' + id + '/restart')({ force: force });
        }
    };

    return methods;
}
