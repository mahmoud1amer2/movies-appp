const { getMovies, saveMovies } = require('./functionMovies')

const requestRoutes = (req , res) => {

  if (req.url === '/movies' && req.method === 'GET') {
    const movies = getMovies()

    res.writeHead(200, { 'Content-Type': 'application/json' })
    return res.end(JSON.stringify(movies))
  }



  if (req.url === '/movies' && req.method === 'POST') {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk.toString()
    })

    req.on('end', () => {
      const newMovie = JSON.parse(body)

      const movies = getMovies()

      newMovie.id = Date.now()

      movies.push(newMovie)
      saveMovies(movies)
      res.writeHead(201, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(newMovie))
    });

    return;
  }



  if (req.url.startsWith('/movies/') && req.method === 'PATCH') {
    const parts = req.url.split('/').filter(Boolean)
    const id = parseInt(parts[1])

    let body = ''

    req.on('data', (chunk) => {
    body += chunk.toString()
    });

    req.on('end', function() {

        if (!body) {
            res.writeHead(400);
            return res.end('No data provided')
        }

        const updatedData = JSON.parse(body)
        const movies = getMovies()
        const index = movies.findIndex( (m)=> m.id === id)

      if (index === -1) {
        res.writeHead(404)
        return res.end('Movie not found')
      }

      movies[index] = { ...movies[index], ...updatedData }

      saveMovies(movies)

      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(movies[index]))
    })

    return
  }

    if (req.url.startsWith('/movies/') && req.method === 'DELETE') {
        const id = parseInt(req.url.split('/')[2])

        const movies = getMovies()
        const index = movies.findIndex(m => m.id === id)

        if (index === -1) {
            res.writeHead(404)
            return res.end('Movie not found')
        }

        const deletedMovie = movies.splice(index, 1)
        saveMovies(movies);
    
        res.writeHead(200, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(deletedMovie))
  }

        res.writeHead(404)
        res.end('Not Found')
}

module.exports = requestRoutes
