import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import router from './routes/userRouter';

const server = express();

server.use(express.json());
server.use(
  cors({
    origin: '*',
    optionsSuccessStatus: 200,
  }),
);
server.use(router);

export { server };
