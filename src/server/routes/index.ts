import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.get('/', (_, res) => { //Disponibilizando a rota
  return res.send('Olá, DEV!'); //Retorna uma resposta
});

router.post('/teste', (req, res) => {
  console.log(req.body); //Recebe o corpo da requisição

  return res.status(StatusCodes.NOT_FOUND).json(req.body);
});







export { router };