import express, { Application } from 'express';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import { config as dotenv } from 'dotenv';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    dotenv();
  }

  protected plugins(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }
}

const app = new App().app;
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log('Server is running on port ' + PORT);
});
