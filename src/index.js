import express from "express"; // Importa o pacote express para criar o servidor web.
import bodyParser from "body-parser"; // Importa o pacote body-parser para analisar os corpos das requisições HTTP.
import userController from "./controllers/user"; // Importa o controller de usuários que gerencia as rotas e operações relacionadas aos usuários.

const app = express(); // Cria uma aplicação express.
const port = 3000; // Define a porta em que o servidor vai rodar.

app.use(bodyParser.json()); // Configura o middleware body-parser para transformar o corpo das requisições em JSON.

app.use("/user", userController); // Define a rota base '/user' para o userController, que gerencia todas as operações relacionadas aos usuários.

// Inicia o servidor e faz com que ele escute na porta definida.
app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`); // Exibe uma mensagem no console indicando que o servidor está em execução.
});