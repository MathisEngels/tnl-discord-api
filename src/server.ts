import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "localhost";

app.listen({ host: HOST, port: PORT }, (err: any, adress: any) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
  app.log.info(`Server listening at ${adress}!`);
});
