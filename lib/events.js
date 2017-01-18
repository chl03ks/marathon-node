module.exports = function allMethods(request) {

  let methods = {
    /**
     * Attach to the marathon event stream. To use this endpoint, the client
     * has to accept the text/event-stream content type. Please note a request
     * to this endpoint will not be closed by the serve.
     * https://html.spec.whatwg.org/multipage/comms.html#server-sent-events
     */
    subscribe: () => {
       return request('GET', '/events', {headers: {Accept: 'text/event-stream'}}, true)();
    }
  };

  return methods;
}
