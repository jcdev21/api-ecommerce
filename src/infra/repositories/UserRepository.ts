import Connection from '@infra/database/Connection';
import { GetAllUserFilters, IUserRepository } from '@infra/repositories/interfaces';
import { Prisma } from '@prisma/client';

const prisma = Connection.getInstance();

class UserRepository implements IUserRepository {
  private static _instance: UserRepository;

  static getInstance(): UserRepository {
    if (!UserRepository._instance) {
      UserRepository._instance = new UserRepository();
    }

    return UserRepository._instance;
  }

  async create(payload: Prisma.UserCreateInput): Promise<Prisma.UserCreateInput> {
    const user = await prisma.user.create({ data: payload });
    return user;
  }

  async update(
    id: string,
    payload: Pick<Prisma.UserCreateInput, 'name' | 'status' | 'avatar'>
  ): Promise<Prisma.UserCreateInput> {
    const user = await prisma.user.update({
      where: { id },
      data: payload
    });
    return user;
  }

  async getById(id: string): Promise<Prisma.UserCreateInput> {
    const user = await prisma.user.findFirst({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async deleteById(id: string): Promise<boolean> {
    const deleteUser = await prisma.user.delete({ where: { id } });
    return !!deleteUser;
  }

  async getAll(filters: GetAllUserFilters): Promise<Omit<Prisma.UserCreateInput, 'password'>[]> {
    const users = await prisma.user.findMany({
      where: {
        ...(filters?.isStatus && { status: { equals: true } })
      },
      select: {
        id: true,
        email: true,
        name: true,
        status: true
      }
    });
    return users;
  }

  async getPassword(id: string): Promise<Pick<Prisma.UserCreateInput, 'password'>> {
    const user = await prisma.user.findFirst({ where: { id }, select: { password: true } });
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}

export default UserRepository;

// IMPLEMENT SINGLETON DENGAN CARA LAIN
// UserRepo akan menjadi singleton
// export const UserRepo = new UserRepository();
