import { Prisma } from '@prisma/client';

export interface IUserRepository {
  create(payload: Prisma.UserCreateInput): Promise<Prisma.UserCreateInput>;
  update(
    id: string,
    payload: Pick<Prisma.UserCreateInput, 'name' | 'status' | 'avatar'>
  ): Promise<Prisma.UserCreateInput>;
  getById(id: string): Promise<Prisma.UserCreateInput>;
  deleteById(id: string): Promise<boolean>;
  getAll(filters: GetAllUserFilters): Promise<Omit<Prisma.UserCreateInput, 'password'>[]>;
  getPassword(id: string): Promise<Pick<Prisma.UserCreateInput, 'password'>>;
}

export interface GetAllUserFilters {
  isStatus?: boolean;
}
