import express from 'express';
import compression from 'compression';
import { config as dotenv } from 'dotenv';

const app = express();

app.use(compression());
dotenv();

app.listen(3000);
