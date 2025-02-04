const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/contato', (req, res) => {
    const { name, email, message } = req.body;
    
    // Aqui você pode adicionar a lógica para salvar os dados no banco de dados
    console.log(`Nome: ${name}, Email: ${email}, Mensagem: ${message}`);
    
    res.status(200).json({ message: 'Mensagem recebida com sucesso!' });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});