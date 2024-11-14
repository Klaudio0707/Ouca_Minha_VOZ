const mongoose = require('mongoose');
const EmpresaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true },
});
module.exports = mongoose.model('Empresa', EmpresaSchema);
