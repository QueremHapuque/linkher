import { server } from './server';

const { SERVER_PORT } = process.env;

server.listen(SERVER_PORT || '3001', () => {
  console.log(`server running in ${SERVER_PORT} port...`);
});
