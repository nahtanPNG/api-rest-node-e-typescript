import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

import { CidadesController } from './../controllers';



const router = Router();

router.get('/', (_, res) => { //Disponibilizando a rota
  return res.send('Olá, DEV!'); //Retorna uma resposta
});

router.post('/cidades', CidadesController.create);







export { router };