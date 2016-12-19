# dcos-marathon-node

Node.js client library for Marathon's REST API.

## Config

```
const marathonClient = require('marathon-node')(MARATHON_API_URL, {
  // if you have basic authentifiaction in you marathon API
  auth: {
    user: MARATHON_USER,
    pass: MARATHON_PASSWORD,
  },
  // Or Accestoken auth
  headers: {
    'Authorization': 'token=MARATHON_AUTH_TOKEN'
  }
});
```

## API Methods
