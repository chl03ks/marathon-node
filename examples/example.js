const MARATHON_API_URL = process.env.MARATHON_API_URL;
const MARATHON_AUTH_TOKEN = process.env.MARATHON_API_KEY;

const marathonClient = require('../lib/index')(MARATHON_API_URL, {
    headers: {
        'Authorization': 'token=' + MARATHON_AUTH_TOKEN
    }
});


marathonClient.apps.getList()
    .then((apps) => {
      console.log(apps);
    })
    .catch((error) => {
      console.error(error)
    });
