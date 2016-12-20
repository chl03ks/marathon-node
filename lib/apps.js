module.exports = function allMethods(request) {
    let methods = {
        /**
         * @param parameters (Object)
         * https://mesosphere.github.io/marathon/docs/generated/api.html#v2_apps_post
         */
        getList: (parameters) => {
          return request('GET', '/apps')(parameters);
        },
        /**
         * @param Body (Object)
         * https://mesosphere.github.io/marathon/docs/generated/api.html#v2_apps_post
         */
        create: (body) => {
          return request('POST', '/apps')(null, body);
        },
        /**
         * @param app id (String) Required
         * @param parameters (Object)
           https://mesosphere.github.io/marathon/docs/generated/api.html#v2_apps__app_id__get
         */
        getById: (id, parameters) => {
          return request('GET', '/apps/' + id)(parameters);
        },
        /**
         * @param app id (String) Required
         * @param body (Object)
         * https://mesosphere.github.io/marathon/docs/generated/api.html#v2_apps__app_id__put
         * @param parameters (Object)
         * @param parameters.force (Boolean)
         */
        updateById: (id, body, parameters) => {
          return request('PUT', '/apps/' + id)(parameters, body);
        },
        /**
         * @param app id (String) Required
         * @param parameters (Object)
         * @param parameters.force (Boolean)
         */
        destroyById: (id, parameters) => {
          return request('PUT', '/apps/' + id)(parameters);
        },
        /**
         * @param app id (String) Required
         */
        restart: (id, force) => {
          return request('POST', '/apps/' + id + '/restart')({ force: force });
        },
        /**
         * @param app id (String) Required
         */
        getTaskById: (id) => {
          return request('GET', '/apps/' + id + '/tasks')();
        },
        /**
         * @param app id (String)
         * @param parameters Query Parameters
         * @param parameters.force (Boolean)
         * @param parameters.host (String) all tasks of that application on the supplied slave are killed
         * @param parameters.scale (Boolean)
         * @param parameters.wipe (Boolean)
         */
        killTasks: (id, parameters) => {
          return request('DELETE', '/apps/' + id + '/tasks')(parameters);
        },
        /**
         * @param app id (String)
         * @param task id (String)
         * @param parameters Query Parameters
         * @param parameters.force (Boolean)
         * @param parameters.host (String) all tasks of that application on the supplied slave are killed
         * @param parameters.scale (Boolean)
         * @param parameters.wipe (Boolean)
         */
        killTaskById: (appId, taskId, parameters) => {
          return request('DELETE', '/apps/' + appId + '/tasks/' + taskId)(parameters);
        },
        /**
         * @param app id (String)
         */
        getVersions: function getVersions(id) {
          return request('GET', '/apps/' + id + '/versions')();
        },
        /**
         * @param app id (String)
         * @param version id (String)
         */
        getVersion: function getVersion(appId, versionId) {
            return request('GET', '/apps/' + appId + '/versions/' + versionId)();
        }
    };

    return methods;
}
