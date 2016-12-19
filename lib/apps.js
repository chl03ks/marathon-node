module.exports = function allMethods(request) {
    let methods = {
        getList: (query) => {
            return request('GET', 'apps')(query);
        }
    }

    return methods;
}
