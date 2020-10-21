import express from 'express';

const app = express();



//Rota=conjunto
//Recurso = usuário


//Método HTTP = GET, POST, PUT, DELETE

//GET = BUSCAR INFORMAÇÕES(LISTA, ITEM)
//POST = CRIANDO UMA INFORMAÇÃO
//PUT = EDITANDO UMA INFORMAÇÃO
//DELETE = DELETANDO UMA INFORMAÇÃO

//Parametros

//QUERY: http://localhost:3333/users?

//dentro do parenteses do segundo parametro-------->request(tudo o que eu envio para o back), response(tudo o 
//que vc quer enviar do back para o cliente)----> res
app.post('/users', (request, response)=>{
    return response.json({message: "Hello World"});
});



//localhost = 3333
app.listen(3333);



