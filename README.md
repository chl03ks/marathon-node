# Marathon Node.js Client Library

Node.js client library for Marathon's REST API.

## Install

Install using npm or yarn

```
  npm install marathon-node
  // or
  yarn add marathon-node
```

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

### Apps

- /v2/apps GET

```
marathonClient.apps.getList(query)
````

- /v2/apps POST "Create App"

```
marathonClient.app.create(body)
```

#License

MIT.
