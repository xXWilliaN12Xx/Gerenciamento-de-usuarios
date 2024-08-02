<div align="center">

# Projeto de Gerenciamento de Usuários 
## (CREATE | READ | UPDATE | DELETE)

</div>

Este projeto é uma aplicação de gerenciamento de usuários construído com **Express** para o backend e **MongoDB** como banco de dados. O objetivo é fornecer uma API simples para criar, listar, atualizar e deletar usuários.

## Funcionalidades

- **Listar Usuários**: Obtenha uma lista de todos os usuários cadastrados.
- **Criar Usuário**: Adicione um novo usuário com nome e e-mail.
- **Atualizar Usuário**: Atualize as informações de um usuário existente.
- **Deletar Usuário**: Remova um usuário da base de dados.

## Tecnologias Utilizadas

| Tecnologia  | Link      | Descrição                           |
| :---------------- | :--------- | :---------------------------------- |
| **Express** | [Express](https://expressjs.com/pt-br/) | Framework para Node.js que facilita a criação do servidor e das rotas. |
| **Mongoose** | [Mongoose](https://mongoosejs.com/) | Biblioteca para modelar objetos MongoDB e simplificar a interação com o banco de dados. |
| **MongoDB** | [MongoDB](https://www.mongodb.com/)| Banco de dados NoSQL usado para armazenar os dados dos usuários. |

## Estrutura do Projeto

- **`src/controllers/user.js`**: Define as rotas e a lógica do controlador para operações relacionadas aos usuários.
- **`src/models/user.js`**: Define o modelo de dados para o usuário usando Mongoose.
- **`src/utils/database.js`**: Gerencia a conexão com o banco de dados MongoDB.
- **`src/app.js`**: Configura o servidor Express e define as rotas principais.

## Instalação

1. Clone o repositório:

   ```bash
   git clone <URL_DO_REPOSITORIO>
<div align="center">

![Captura de tela 2024-08-02 171414](https://github.com/user-attachments/assets/b5a7cb96-9741-4b3d-9864-e18e9f387568)

</div>
