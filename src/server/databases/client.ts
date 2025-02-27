import { PrismaClient } from '@prisma/client'
import { PrismaD1 } from '@prisma/adapter-d1'
import { getRequestContext } from '@cloudflare/next-on-pages';


export const dbClient = async () => {
  let db;

  if (process.env.NODE_ENV === 'development') {
    const env = getRequestContext().env as CloudflareEnv;
    db = env.DB
  } else {
    db = process.env.DB as unknown as D1Database
  }

  const adapter = new PrismaD1(db)
  return new PrismaClient({ adapter })
}
