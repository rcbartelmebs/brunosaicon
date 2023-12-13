const express = require('express');
const app = express();

// Configuração para receber dados no formato JSON
app.use(express.json());

// Rota para receber os dados
app.post('/receber-dados', (req, res) => {
    const dadosRecebidos = req.body;
    console.log('Dados recebidos:', dadosRecebidos);
    res.send('Dados recebidos com sucesso');
});

app.listen(8080, () => {
    console.log('Servidor HTTP escutando na porta 8080');
});
