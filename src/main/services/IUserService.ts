import { Request } from 'express';

export interface IUserService {
  createUser(req: Request): void;
}
