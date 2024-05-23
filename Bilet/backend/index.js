const express = require('express')
const app = express()
require("./src/config/db")
const port = 3000
const routes=require("./src/routes/productRoute")
const bodyParser = require('body-parser')
var cors = require('cors')


app.use(bodyParser.json())
app.use("/", routes)
app.use(cors())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})