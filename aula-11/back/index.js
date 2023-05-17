const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(bodyParser.urlencoded({ 'extended' : false}));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (request, response)=>{    
    response.json({ 'mensagem' : 'ola mundo!' });
});

app.post('/login', (req, res)=>{
    const { usuario, senha } = req.body;
    const filePath = path.join(__dirname, "data", "login.json");

    fs.readFile(filePath, "utf-8", (err, data)=>{
        if(err){
            console.log(`Erro: ${err}`);
            return;
        }
        const usuarios = JSON.parse(data);
        const usuarioEncontrado = usuarios.find((user) => user.usuario === usuario);
        if(usuarioEncontrado.senha === senha){
            res.json(usuarioEncontrado);
            return;
        }
        res.json({ "erro" : "Login e senha incorreto" });
    });
});

app.listen(3002, ()=>{
    console.log("Servidor online na porta 3002");
});