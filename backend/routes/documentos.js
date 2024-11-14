const express = require('express');
const Documento = require('../models/documento');

const router = express.Router();

router.post('/documentos', async (req, res) => {
  const { empresaId, titulo, descricao } = req.body;
  const novoDocumento = new Documento({ empresaId, titulo, descricao });
  await novoDocumento.save();
  res.status(201).json(novoDocumento);
});

router.get('/documentos/:empresaId', async (req, res) => {
  const documentos = await Documento.find({ empresaId: req.params.empresaId });
  res.json(documentos);
});

module.exports = router;
