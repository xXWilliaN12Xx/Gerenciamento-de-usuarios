import databaseConnection from "../utils/database"; // Importa a função de conexão com o banco de dados.
import User from "../models/user"; // Importa o modelo User.

// Função que retorna uma lista de usuários.
export const listUsers = async () => {
  await databaseConnection(); // Estabelece conexão com o banco de dados.
  const users = await User.find(); // Busca todos os documentos da coleção User.
  return users; // Retorna a lista de usuários.
};

// Função para criar um novo usuário.
export const createUser = async (user) => {
  await databaseConnection(); // Estabelece conexão com o banco de dados.
  const createdUser = await User.create(user); // Cria um novo documento de usuário com os dados fornecidos.
  return createdUser; // Retorna o usuário criado.
};

// Função para deletar um usuário pelo ID.
export const deleteUser = async (id) => {
  await databaseConnection(); // Estabelece conexão com o banco de dados.
  await User.findByIdAndDelete(id); // Encontra e deleta o usuário pelo ID.
};

// Função para atualizar um usuário pelo ID.
export const updateUser = async (id, newBody) => {
  await databaseConnection(); // Estabelece conexão com o banco de dados.
  await User.findByIdAndUpdate(id, newBody); // Encontra e atualiza o usuário pelo ID com os novos dados fornecidos.
};
