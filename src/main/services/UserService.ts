import UserRepository from '@infra/repositories/UserRepository';
import { Request } from 'express';
import bcrypt from 'bcrypt';
import { IUserService } from './IUserService';

class UserService implements IUserService {
  public static _instance: UserService;
  private readonly userRepo: UserRepository = new UserRepository();

  public static getInstance(): UserService {
    if (!UserService._instance) {
      UserService._instance = new UserService();
    }

    return UserService._instance;
  }

  async createUser(req: Request) {
    throw new Error('Ada Error');

    const { email, name, password } = req.body;
    const passwordHash: string = await bcrypt.hash(password, 10);
    return this.userRepo.create({ email, name, password: passwordHash });
  }
}

export default UserService;
