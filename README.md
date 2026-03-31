# 1.🚀 How to run the server

This code does not use external libraries, therefore the methods for executing this code are:

 1.node index.js

 2.Open Postman or browser: http://localhost:3000/movies

 # 2.🌐 List of endpoints

1.GET /movies → get all movies

2.POST /movies → add new movie

3.PATCH /movies/:id → update movie

4.DELETE /movies/:id → delete movie

# 3.📦 Example request body (POST & PATCH)

Here, I enter the link name in the Postman program and select my order type.

### 1.POST /movies : POST     http://localhost:3000/movies

{

  "title" : "ahmad-movie",
  
  "id" : 39583453
  
}

### 2.PATCH /movies/id (id:39583453)  PATCH   http://localhost:3000/movies/39583453

{

  "title" : "mahmoud-movie"
  
}

# 4.⚠️ Any known limitations

I didn't do the validation, 

and I also didn't do the advanced things like the search.

# 5.📊 Your progress

### Completed:

- GET, POST, PATCH, DELETE endpoints

Not completed:

- Validation for all fields

# 6.😵 Challenges you faced

The challenges included not using ready-made external libraries, 

but at the same time it was a good idea not to 
use them in order to see how Node.js 

works without these libraries.


