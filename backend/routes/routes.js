
app.get('/api/empresas', getEmpresas);
app.post('/api/empresas', addEmpresa);
app.get('/api/empresas/:id', getEmpresaById);

// Feedback
app.post('/api/feedback', submitFeedback);
app.get('/api/feedback/:empresaId', getFeedbackByEmpresa);

// Campanhas
app.get('/api/campanhas', getCampanhas);
app.post('/api/campanhas', createCampanha);
app.post('/api/campanhas/compromisso/:empresaId', signCompromisso);