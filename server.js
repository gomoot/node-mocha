const express = require('express')
const app = express()
const port = 3000

if(!module.parent) {
    app.listen();
 }

app.get('/', (req, res) => res.send('Hello World!'))


var server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = server