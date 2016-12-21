module.exports = function allMethods(request) {
  
  let methods = {
    getList: () => {
      return request('GET', '/deployments')();
    },
    /**
     * @param deployment_id required (String)
     * @param parameters Query Parameters
     * @param parameters.force (Boolean)
     */
    deleteById: (deploymentId, parameters) => {
      return request('DELETE', '/deployments/' + deploymentId)(parameters)
    }
  };

  return methods;
}
