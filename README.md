# parse-bearer-token

## Installation

```bash
$ yarn add @loopsdteam/parse-bearer-token
```

## use

```bash
// from express
const parseBearerToken = require('@loopsdteam/parse-bearer-token')

app.get('/abc', (req, res, next) => {
  const token = parseBearerToken(req)
  // token without 'bearer'  
})
```
