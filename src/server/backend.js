const express = require('express')
const cors = require('cors')
const monty = require('./monty.js')
const backend = express()
backend.use(cors())
const PORT = 2077

// backend.all('/', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   next();
//  });

backend.get('/monty/', async (req, res) => {
  let sampleSize = Number(req.query.sampleSize)
  let keep = Boolean(req.query.keep)
  let numberOfDoors = Number(req.query.numberOfDoors)
  let result = monty.simulateMonty(sampleSize,keep,numberOfDoors)
  console.log(result)
  await res.send(result)
  console.log(`result returned`)

})

backend.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})

// localhost:2077/monty/?sampleSize=100000&keep=true&numberOfDoors=3