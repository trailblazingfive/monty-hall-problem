const express = require('express')
const path = require('path');
const cors = require('cors')
const monty = require('./monty.js')
const app = express()
app.use(cors())
const PORT = 2077

app.get('/monty/', async (req, res) => {
  let sampleSize = Number(req.query.sampleSize)
  let keep = Boolean(req.query.keep)
  let numberOfDoors = Number(req.query.numberOfDoors)
  let result = monty.simulateMonty(sampleSize,keep,numberOfDoors)
  console.log(result)
  await res.send(result)
  console.log(`Simulation result returned`)
})

app.listen(PORT, () => {
  console.log(`Monty Hall Problem backend listening at http://localhost:${PORT}`)
})

// localhost:2077/monty/?sampleSize=100000&keep=true&numberOfDoors=3