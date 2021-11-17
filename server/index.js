const express = require('express')
const path = require('path')

const app = express()

app.get('/', function(req, res) {
    res.sendFile(path.join(_dirname, '../index.html'))
})

const port = process.env.PORT || 4005
// this is the variable we'll use for Heroku, this the "Production Port"

app.listen(port, () => {
    console.log(`Docked at port ${port}`)
})