//Aula 1 - criando primeira app com node - HEllo World

//Importando as funcionalidades do express
const express = require('express');

//variavel que irá armazena a app, isntanciação da aplicação
const app = express();

//criando primeira rota, rota principal, retornando um no formato JSON
app.get('/', (request,response) => {
    return response.json({
        evento: 'Semana Oministack 11.0',
        aluno: 'Joao Vitor Martins'
    })
})

//aplicação irá ouvir a porta
app.listen(3333);

