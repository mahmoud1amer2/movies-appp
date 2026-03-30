GET : get the movies from movies-db.json 

POST : added the movie in the movies-db.json 

PATCH : updated the movie from movies-db.json by the ID 

DELETE : delete the movie from movies-db.json by the ID

example on POST : { "title":"ahmadd-movie","id":"294856"} the film adds the list on the list

example on  PATCH : http://localhost:3000/movies/ID {"title":"mohamed-movie","id":"4957175"} , Here I put the ID of the movie I want to edit next to the movies, for example, the movie "Ahmed" that I posted. Then I'll put the new data inside the body, and the update will be based on the new data. Deletion is done in the same way.

