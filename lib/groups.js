module.exports = function allMethods(request) {
  let methods = {
    /**
     * Get the group with all applications and all transitive child groups.
     * @param parameters Query Parameters
     * embed: (one of group.groups, group.apps,
     group.apps.tasks, group.apps.count, group.apps.deployments,
     group.apps.lastTaskFailure, group.apps.failures,
     group.apps.taskStats - repeat: true)
     https://mesosphere.github.io/marathon/docs/generated/api.html#v2_groups_get
     */
    getList: (parameters) => {
      return request('GET', '/groups')(parameters);
    },
    /**
    * Change parameters of a deployed application group. The new group parameters
    * get applied.
    * WARNING YOU CAN SE MORE INFORMATION HERE
    * https://mesosphere.github.io/marathon/docs/generated/api.html#v2_groups_put
    * @param parameters Query Parameters (Object)
    * @param parameters.force (Boolean)
    * @param body Type: application/json
    */
    changeAlldeployedGroup: (body, parameters) => {
      return request('PUT', '/groups')(parameters, body);
    },
    /**
    * Create and start a new application group. Application groups can contain
    * other application groups.
    * @param parameters Query Parameters (Object)
    * @param parameters.force (Boolean)
    * @param body Type: application/json
    */
    create: (body, parameters) => {
      return request('POST', '/groups')(parameters, body);
    },
    /**
    * Destroy a group.
    * All data about that group and all associated applications will be deleted!
    * @param parameters Query Parameters (Object)
    * @param parameters.force (Boolean)
    */
    delete: (paramters) => {
      return request('DELETE', '/groups')(parameters);
    },

  };

  return methods;
}
