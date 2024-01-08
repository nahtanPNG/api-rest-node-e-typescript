import { Request, Response } from 'express';

interface ICidade{ //Definindo Tipagem
  nome: string;
}

//Controller de criação de cidades
export const create = (req: Request<{}, {}, ICidade>, res: Response) => { //Definindo a tipagem do body

  console.log(req.body.nome);

  return res.send('Create!');
};