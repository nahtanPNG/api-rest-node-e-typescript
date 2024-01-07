import express from 'express';

const server = express(); //Instância do servidor

//Configurações do servidor
server.get('/', (_, res) => {
  return res.send('Olá, DEV!'); //Retorna uma resposta
});


export { server };