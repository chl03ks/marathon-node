modules.export = function allMethods(request) {
  let methods {
    getAppsList: (query) => {
      return request('GET', '/apps')(query);
    }
  }

  return methods;
}
