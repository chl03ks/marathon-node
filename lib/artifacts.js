module.exports = function allMethods(request) {
  let methods = {
    /**
     * Upload an artifact to the artifact store. A multipart form upload request
     * has to be performed. The form parameter name has to be file. The filename
     * used in the artifact store, is the same as given by the form parameter.
     * The response holds the URL of the artifact in the artifact store in the
     * Location Header.
     * @param Body (multipart/form-data)
     * Form Parameter file: (file)
     */
    upload: (body) => {
      return request('POST', '/artifacts')(null, body);
    },
    /**
     * Upload an artifact to the artifact store. A multipart form upload request
     * has to be performed. The form parameter name has to be file.
     * @param path URI Parameters (String)
     * @param Body (multipart/form-data)
     * Form Parameter file: (file)
     */
    update(path, body) => {
      return request('PUT', '/artifacts/' + path)(null, body);
    },
    /**
     * Delete an artifact from the artifact store. The path is the relative path
     * in the artifact store.
     * @param path URI Parameters (String)
     */
    deleteByPath(path) => {
      return request('DELETE', '/artifacts/' + path)();
    }
    /**
     * Upload an artifact to the artifact store. A multipart form upload request
     * has to be performed. The form parameter name has to be file. The filename
     * used in the artifact store, is the same as given by the form parameter.
     * The response holds the URL of the artifact in the artifact store in the
     * Location Header.
     * @param path URI Parameters (String)
     * @param Body (multipart/form-data)
     * Form Parameter file: (file)
     */
    uploadInSpecificPath: (path, body) => {
      return request('POST', '/artifacts/'+ path)(null, body);
    },
    /**
     * Download an artifact from the artifact store. The path is the relative
     * path in the artifact store.
     * @param path URI Parameters (String)
     */
    download: (path) => {
      return request('GET', '/artifacts/'+ path)();
    }
  }

}
