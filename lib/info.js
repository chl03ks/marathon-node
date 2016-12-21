module.exports = function allMethods(request) {

  let methods = {
    /**
     * Get info about the Marathon Instancet
     */
    get: () => {
      return request('GET', '/info')();
    }
  };

  return methods;

};
