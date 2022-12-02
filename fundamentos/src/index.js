const express = require('express'); 

const app = express();

 // o express não recebe apenas json entao precisamos explicar pra ele 
app.use(express.json())

app.get("/courses", (request, response) => {
 const query = request.query;
 console.log(query)
 return response.json(["Curso 1", "Curso 2", "Curso 3"])
});

app.post("/courses", (request, response) => {
 const body = request.body;
 console.log(body)
 return response.json(["Curso 1", "Curso 2", "Curso 3", "Curso 4"]);
});

// esse :id é o parametro de identificação o put atualiza uma informação entao passa o id do curso como parametro
// quando ele receber esse id ele vai alterar o curso 1 para curso 6
app.put("/courses/:id", (request, response) => {
 const { id } = request.params;
 console.log(params)
 
 return response.json(["Curso 6", "Curso 2", "Curso 3", "Curso 4"]);
})

app.patch("/courses/:id",(request, response) => {
 return response.json(["Curso 6", "Curso 7", "Curso 3", "Curso 4"]);
})

app.delete("/courses/:id", (request, response) => {
 return response.json(["Curso 6", "Curso 7", "Curso 4"]);
})
app.listen(3333);

