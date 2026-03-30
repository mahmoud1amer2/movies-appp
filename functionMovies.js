const fs = require('fs')

function getmovies() {
  return JSON.parse(fs.readFileSync('movies-db.json', 'utf-8'))
};

function saveMovies(movies) {
  fs.writeFileSync('movies-db.json', JSON.stringify(movies, null, 3))
};

module.exports = { 
    getMovies, 
    saveMovies 
}
