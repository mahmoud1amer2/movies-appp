const http = require('http')
const requestRoutes = require('./routes')
const port = 3000

const server = http.createServer((req, res) => {
  requestRoutes(req, res)
})

server.listen(port, function() {
  console.log('Server running on port :' , port)
})
