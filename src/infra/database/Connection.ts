import { PrismaClient } from '@prisma/client';
const databaseUrl =
  process.env.NODE_ENV === 'production' ? process.env.PROD_DATABASE_URL : process.env.DEV_DATABASE_URL;

class Connection {
  private static _instance: PrismaClient;

  public static getInstance(): PrismaClient {
    if (!Connection._instance) {
      Connection._instance = new PrismaClient({
        datasources: {
          db: {
            url: databaseUrl
          }
        }
      });
    }

    return Connection._instance;
  }
}

export default Connection;
