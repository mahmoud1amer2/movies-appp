const http = require('http')
const requestRoutes = require('./routes')

const server = http.createServer((req, res) => {
  requestRoutes(req, res)
})

server.listen(3000, () => {
  console.log('Server running on port 3000')
})