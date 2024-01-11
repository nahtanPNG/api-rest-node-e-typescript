import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

interface ICidade { //Definindo Tipagem
  nome: string;
  estado: string;
}

//Validação dos atributos com o yup
const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
  nome: yup.string().required().min(3),
  estado: yup.string().required().min(3),
});

//Controller de criação de cidades
export const create = async (req: Request<{}, {}, ICidade>, res: Response) => { //Definindo a tipagem do body

  let validatedData: ICidade | undefined = undefined;

  try { //Recebendo os dados e validando
    validatedData = await bodyValidation.validate(req.body, { abortEarly: false });
  } catch (erro) { //Tratamento de erros
    const yupError = erro as yup.ValidationError;
    const errors: Record<string, string> = {}; //Objeto vazio

    //Mapeando erros
    yupError.inner.forEach(error => {
      if (error.path === undefined) return;
      errors[error.path] = error.message; //Adicionando no Record que estava vazio
    });

    return res.status(StatusCodes.BAD_REQUEST).json({
      errors
    });
  }
  console.log(validatedData);

  return res.send('Create!');
};