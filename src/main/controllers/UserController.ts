import { Request, Response } from 'express';
import { IUserService } from 'main/services/IUserService';
import UserService from 'main/services/UserService';

class UserController {
  async store(req: Request, res: Response): Promise<void> {
    try {
      const userService: IUserService = UserService.getInstance();
      await userService.createUser(req);
      console.log('success');
    } catch (error) {
      console.log('error');
    }
  }
}

export default UserController;
