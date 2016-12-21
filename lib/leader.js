module.exports = function allMethods(request) {

  let methods = {
    /**
     * Returns the current leader.
     */
    getCurrent: () => {
      return request('GET', '/leader')();
    },
    /**
     * Causes the current leader to abdicate, triggering a new election.
     */
    deleteCurrent: () => {
      return request('DELETE', '/leader')();
    }
  };

  return methods;

};
