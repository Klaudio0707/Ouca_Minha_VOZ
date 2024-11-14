const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Empresa = require('../models/empresa');

const router = express.Router();

router.post('/register', async (req, res) => {
  const { nome, email, senha } = req.body;
  const hashedPassword = await bcrypt.hash(senha, 10);

  try {
    const empresa = new Empresa({ nome, email, senha: hashedPassword });
    await empresa.save();
    res.status(201).json({ message: 'Cadastro realizado!' });
  } catch (error) {
    res.status(400).json({ error: 'Erro no cadastro' });
  }
});

router.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const empresa = await Empresa.findOne({ email });

  if (!empresa) return res.status(400).json({ error: 'Email não encontrado' });

  const validSenha = await bcrypt.compare(senha, empresa.senha);
  if (!validSenha) return res.status(400).json({ error: 'Senha incorreta' });

  const token = jwt.sign({ id: empresa._id }, process.env.JWT_SECRET);
  res.json({ token });
});

module.exports = router;
