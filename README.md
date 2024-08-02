<div align="center">

# Projeto de Gerenciamento de Usuários 
### (CREATE | READ | UPDATE | DELETE)

</div>

<div align="center">
   
### Este projeto é uma aplicação de gerenciamento de usuários construído com **Express** para o backend e **MongoDB** como banco de dados. O objetivo é fornecer uma API simples para criar, listar, atualizar e deletar usuários.

<p align="center"><img src="http://img.shields.io/static/v1?label=STATUS&message=CONCLUIDO&color=GREEN&style=for-the-badge"/></p> 

</div>

#

### Funcionalidades

- **Listar Usuários**: Obtenha uma lista de todos os usuários cadastrados.
- **Criar Usuário**: Adicione um novo usuário com nome e e-mail.
- **Atualizar Usuário**: Atualize as informações de um usuário existente.
- **Deletar Usuário**: Remova um usuário da base de dados.

#

### Tecnologias Utilizadas

| Tecnologia  | Link      | Descrição                           |
| :---------------- | :--------- | :---------------------------------- |
| **Express** | [Express](https://expressjs.com/pt-br/) | Framework para Node.js que facilita a criação do servidor e das rotas. |
| **Mongoose** | [Mongoose](https://mongoosejs.com/) | Biblioteca para modelar objetos MongoDB e simplificar a interação com o banco de dados. |
| **MongoDB** | [MongoDB](https://www.mongodb.com/)| Banco de dados NoSQL usado para armazenar os dados dos usuários. |

#

### Estrutura do Projeto

- **`src/controllers/user.js`**: Define as rotas e a lógica do controlador para operações relacionadas aos usuários.
- **`src/models/user.js`**: Define o modelo de dados para o usuário usando Mongoose.
- **`src/utils/database.js`**: Gerencia a conexão com o banco de dados MongoDB.
- **`src/app.js`**: Configura o servidor Express e define as rotas principais.

#


## Pré-requisitos

### Antes de começar, certifique-se de ter os seguintes itens instalados:

- **Node.js**: [Instale o Node.js](https://nodejs.org/) (Verifique a versão instalada com `node -v`).
- **Git**: [Instale o Git](https://git-scm.com/) (Verifique a versão instalada com `git --version`).
- **MongoDB**: Configure uma instância do MongoDB localmente ou utilize um serviço gerenciado como [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

## Instruções para Rodar a Aplicação

### 1. Clone a base do Repositório

Clone o repositório do projeto para o seu ambiente local:

```bash
git clone <URL_DO_REPOSITORIO>
cd <DIRETORIO_DO_PROJETO>

```
### 2. Instalar dependencias

Instale as dependências do projeto usando npm:

```bash
npm install
```

### 3. Configurar variáveis ambiente

Crie um arquivo .env na raiz do projeto e adicione as variáveis de ambiente necessárias. Um exemplo de configuração pode ser:

```bash
DATABASE_URI=mongodb://username:password@host:port/database
```
Substitua username, password, host, port, e database com as informações do seu banco de dados MongoDB.

### 4.Executar a Aplicação
Inicie a aplicação com o comando:

```bash
npm run dev
```

### 5. Testar a Aplicação

Utilize ferramentas como Postman ou cURL para testar as rotas da API:

- Listar Usuários: GET localhost:3000/user
- Criar Usuário: POST localhost:3000/user com um corpo JSON contendo name e email
- Atualizar Usuário: PUT localhost:3000/user/:userId com um corpo JSON contendo os campos a serem atualizados
- Deletar Usuário: DELETE localhost:3000/user/:userId

### 6. Parar a Aplicação

Para parar a aplicação, pressione Ctrl + C no terminal onde o servidor está em execução.

#

<div align="center">

### Contribuição
Se você deseja contribuir para este projeto, sinta-se à vontade para enviar um pull request ou abrir uma issue com sugestões e melhorias.

</div>

<div align="center">

### Imagem de ilustração do deploy.

![Captura de tela 2024-08-02 171414](https://github.com/user-attachments/assets/b5a7cb96-9741-4b3d-9864-e18e9f387568)

</div>













