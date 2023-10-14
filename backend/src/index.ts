import express from "express";
import cors from "cors";
import "dotenv/config";

const server = express();
const { SERVER_PORT } = process.env;
  
server.use(express.json());
server.use(cors({
  origin: "*",
  optionsSuccessStatus: 200
}));

server.listen(SERVER_PORT || "3001", async () => {
  console.log(`server running in ${SERVER_PORT} port...`);
});