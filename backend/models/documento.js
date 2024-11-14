const mongoose = require('mongoose');
const DocumentoSchema = new mongoose.Schema({
  empresaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa' },
  titulo: { type: String, required: true },
  descricao: { type: String },
  status: { type: String, default: 'Pendente' },
  dataEnvio: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Documento', DocumentoSchema);
