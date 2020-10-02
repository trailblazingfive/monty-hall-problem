const express = require('express')
const path = require('path');
const app = express()

const PORT = 3200
const BUILD = '/../../build'

app.use(express.static(path.join(__dirname, BUILD)));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, BUILD, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Static server listening at http://localhost:${PORT}`)
})
