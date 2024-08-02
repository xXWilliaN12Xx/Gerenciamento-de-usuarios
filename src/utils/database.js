import mongoose from "mongoose";

const URI =
  "mongodb+srv://admin:projetocrud@cluster0.t7cxutb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Função para conectar com o banco de dados
const databaseConnection = async () => {
  if (!global.mongoose) {
    // Verifica se a conexão com o mongoose já está estabelecida.
    mongoose.set("strictQuery", false); // Desabilita o modo strict para as consultas no mongoose (opcional).
    global.mongoose = await mongoose.connect(URI); // Conecta ao banco de dados usando a URI fornecida e armazena a conexão globalmente.
  }
};

export default databaseConnection; // Exporta a função databaseConnection