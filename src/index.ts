import { server } from './server/server';

server.listen(process.env.PORT || 3333, () => { //Escuta o servidor -> porta e callback
  return console.log(`App Rodando! ${process.env.PORT || 3333}`);
}); 