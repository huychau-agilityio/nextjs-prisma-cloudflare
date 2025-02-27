import { PrismaClient } from '@prisma/client'
import { PrismaD1 } from '@prisma/adapter-d1'
import { getRequestContext } from '@cloudflare/next-on-pages';


export const dbClient = async () => {
  const env = getRequestContext().env as CloudflareEnv;

  const adapter = new PrismaD1(env.DB)
  return new PrismaClient({ adapter })
}
