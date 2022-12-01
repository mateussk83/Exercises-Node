const express = require('express'); // import do express

const app = express();

// para chamar essa rota vai ser localhost:3333/

//request: tudo aquilo que estamos recebendo da requisição
//response: tudo aquilo que estamos retornando da requisição
app.get("/", (request, response) => {
// send envia uma mensagem pra quem ta buscando essa rota
// geralmente nao utilizamos o send mas sim o json
 return response.json({ message: "Hello World Ignite!"});
});

// porta onde a aplicação vai ser inicializada
//localhost:3333
app.listen(3333);

