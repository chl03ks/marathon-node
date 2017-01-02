const marathonClient = require('../lib/index')(MARATHON_API_URL, {
  headers: {
      'Authorization': 'token=MARATHON_AUTH_TOKEN'
  }
});

marathonClient.apps
  .getList()
  .then(data => console.log(data))
  .catch(error => console.error(error));
