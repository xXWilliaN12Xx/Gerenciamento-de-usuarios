import { Router } from "express"; // Importa a função Router do pacote express para criar um controlador.
import {
  listUsers,
  createUser,
  deleteUser,
  updateUser,
} from "../services/user"; // Importa as funções para listar, criar, deletar e atualizar usuários.

// Cria uma constante router usando a função Router.
const router = Router();

// Rota para buscar dados do controlador de usuários.
router.get("/", async (req, res) => {
  const userList = await listUsers(); // Espera a resposta da função listUsers e armazena na variável userList.
  res.send(userList); // Envia a lista de usuários como resposta.
});

// Rota para criar novos dados de usuários.
router.post("/", async (req, res) => {
  try {
    const user = await createUser(req.body); // Espera a criação de um novo usuário com os dados do corpo da requisição e armazena na variável user.
    res.status(201).send(user); // Envia o usuário criado como resposta com o status 201 (Criado).
  } catch (err) {
    res.status(400).send(err); // Em caso de erro, envia uma resposta com o status 400 (Solicitação Inválida) e o erro.
  }
});

// Rota para deletar dados de um usuário específico.
router.delete("/:userId", async (req, res) => {
  await deleteUser(req.params.userId); // Chama a função deleteUser com o ID do usuário passado como parâmetro na URL.
  res.send(); // Envia uma resposta sem conteúdo para indicar que a exclusão foi realizada.
});

// Rota para atualizar dados de um usuário específico.
router.put("/:userId", async (req, res) => {
  await updateUser(req.params.userId, req.body); // Chama a função updateUser com o ID do usuário e os dados do corpo da requisição.
  res.send(); // Envia uma resposta sem conteúdo para indicar que a atualização foi realizada.
});

export default router; // Exporta a constante router para ser usada em outras partes da aplicação.
