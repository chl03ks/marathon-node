module.exports = function allMethods(request) {

  let methods = {
    /**
     * Get the group with all applications and all transitive child groups.
     * @param parameters Query Parameters
     * embed: (one of group.groups, group.apps,
     * group.apps.tasks, group.apps.count, group.apps.deployments,
     * group.apps.lastTaskFailure, group.apps.failures,
     * group.apps.taskStats - repeat: true)
     * https://mesosphere.github.io/marathon/docs/generated/api.html#v2_groups_get
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
    updateAll: (body, parameters) => {
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
    /**
     * List all versions the group with the specified path.
     * @param group id (String)
     */
    getVersions(groupId) => {
      return request('GET', '/groups/versions')();
    },
    /**
     * Get the group with all applications and all transitive child groups.
     * @param group id (String)
     * @param parameters Query Parameters (Object)
     * embed: (one of group.groups, group.apps,
     * group.apps.tasks, group.apps.count, group.apps.deployments,
     * group.apps.lastTaskFailure, group.apps.failures,
     * group.apps.taskStats - repeat: true)
     */
    getById: (groupId, parameters) => {
      return request('GET'.
        '/groups/' + groupId)(parameters);
    },
    /**
     * Change parameters of a deployed application group id. The new group parameters
     * get applied.
     * WARNING YOU CAN SE MORE INFORMATION HERE
     * https://mesosphere.github.io/marathon/docs/generated/api.html#v2_groups__group_id__put
     * @param parameters Query Parameters (Object)
     * @param parameters.force (Boolean)
     * @param body Type: application/json
     */
    updateGroupById: (groupId, body, parameters) => {
      return request('PUT', '/groups/' + groupId)(parameters, body);
    },
    /**
     * Create and start a new application group by id. Application groups can contain
     * other application groups.
     * @param group id (String)
     * @param body Schema (Object)
     * @param parameters Query Parameters (Object)
     * @param parameters.force (Boolean)
     */
    createById: (groupId, body, parameters) => {
      return request('POST', '/groups/' + groupId)(parameters, body);
    },
    /**
     * Destroy a group by id.
     * All data about that group and all associated applications will be deleted
     * @param group id (String)
     * @param body Schema (Object)
     * @param parameters Query Parameters (Object)
     * @param parameters.force (Boolean)
     */
    deleteById: (groupId, parameters) => {
      return request('DELETE', '/groups/' + groupId)(parameters);
    },
    /**
     * List all versions the group with the specified.
     * @param group id (string)
     */
    getVersion(groupId) => {
      return request('GET', '/groups/' + groupId + '/versions')();
    },
  };

  return methods;
};
