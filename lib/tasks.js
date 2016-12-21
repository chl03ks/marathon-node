module.exports = function allMethods(request) {
  let methods = {
    /**
     * List all running tasks.
     * @param parameters Query Parameters (Object)
     * @param parameters.status Filter the list of tasks by status
     */
    getList: (parameters) => {
      return request('GET', '/tasks')(parameters);
    },
    /**
     * Kill a list of running tasks.
     * @param parameters Query Parameters (Object)
     * @param parameters.force (Boolean)
     * @param parameters.scale (Boolean)
     * @param parameters.wipe (Boolean)
     * @param body Type: application/json
     * Example { "ids": [ "task1", "task2" ] }
     */
    killAll: (body, parameters) => {
      return request('POST', '/task/delete')(parameters, body);
    },
  };

  return methods;
}
