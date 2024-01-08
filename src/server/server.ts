import express from 'express';

import { router } from './routes';

const server = express(); //Instância do servidor

//Configurações do servidor

server.use(express.json()); //Server vai entender o formato JSON

server.use(router); //Server vai fazer uso das rotas 

export { server };