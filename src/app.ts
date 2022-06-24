import express from 'express';
import compression from 'compression';
import { config as dotenv } from 'dotenv';
import UserRepository from '@infra/repositories/UserRepository';

const app = express();

app.use(compression());
dotenv();

app.listen(3000);

const repo1 = UserRepository.getInstance();
const repo2 = UserRepository.getInstance();

console.log(repo1 === repo2);
