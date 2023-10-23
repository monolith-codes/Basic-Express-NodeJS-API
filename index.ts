import express, { Express, Request, Response, Application } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome from NodeJS + Express with TypeScript');
});

app.listen(port, () => {
  console.log('NodeJS Server is listening on port: ' + port);
});
