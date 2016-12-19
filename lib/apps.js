module.exports = function allMethods(request) {
    let methods = {
        getList: (query) => {
            return request('GET', '/apps')(query);
        },
        create: (body) => {
          return request('POST', '/apps')(null, body);
        }
    };

    return methods;
}
