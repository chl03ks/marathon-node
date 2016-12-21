module.exports = function allMethods(request) {

  let methods = {
    /**
     * List all event subscriber callback URLs.
     * _NOTE To activate this endpoint, you need to startup a
     * Marathon instance with --event_subscriber http_callback_
     */
    getList: () => {
      return request('GET', '/eventSubscriptions')();
    },
    /**
     * Subscribe to the event callback mechanism with the specified callback URL.
     * @param parameters Query Parameters (Object)
     * @param parameters.callbackUrl (String)
     */
    subscribe: (parameters) => {
      return request('POST', '/eventSubscriptions')(parameters);
    },
    /**
     * Unregister a callback URL from the event subscribers list..
     * @param parameters Query Parameters (Object)
     * @param parameters.callbackUrl (String)
     */
    unregister: (parameters) => {
      return request('DELETE', '/eventSubscriptions')(parameters);
    }
  };

  return methods;

}
