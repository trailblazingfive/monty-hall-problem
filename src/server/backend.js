const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const cors = require('cors')
const monty = require('./monty.js')
const app = express()

const PORT = 2077
const BUILD = '/../../build'

app.use(cors())
app.use(express.static(path.join(__dirname, BUILD)));


app.get('/api/monty/', async (req, res) => {
  let sampleSize = Number(req.query.sampleSize)
  let keep = Boolean(req.query.keep)
  let numberOfDoors = Number(req.query.numberOfDoors)
  let result = monty.simulateMonty(sampleSize,keep,numberOfDoors)
  console.log(result)
  await res.send(result)
  console.log(`Simulation result returned`)
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, BUILD, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Monty Hall Problem backend listening at http://localhost:${PORT}`)
})



// localhost:2077/api/monty/?sampleSize=100000&keep=true&numberOfDoors=3