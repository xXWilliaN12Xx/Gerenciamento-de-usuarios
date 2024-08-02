import mongoose from "mongoose"; // Importa o módulo mongoose para manipulação do banco de dados MongoDB.

// Define o esquema do usuário com campos de nome e email.
const UserSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Campo nome do tipo String, obrigatório.
  email: { type: String, required: true, unique: true }, // Campo email do tipo String, obrigatório e único.
});

// Exporta o modelo de usuário. Se já existir um modelo chamado 'User', ele o reutiliza; caso contrário, cria um novo modelo.
export default mongoose.User || mongoose.model("User", UserSchema);
