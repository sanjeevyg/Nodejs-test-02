const express = require('express')
const bodyParser = require("body-parser")
const cors = require('cors')
const knex = require('knex')

const app = express()
app.use(bodyParser.json());
app.use(cors())

const port = 3000

app.listen(port, () => {console.log(`listening to the port ${port}`)})

