import { NextRequest, NextResponse } from 'next/server';
import { dbClient } from '@/server/databases/client';
import { Prisma } from '@prisma/client/edge';

export const runtime = 'edge';

export async function GET() {

  const db = await dbClient();

  try {
    const users = await db.user.findMany();
    return NextResponse.json(users);
  } catch {
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const db = await dbClient();

   // Ensure body is correctly typed
   const body: Prisma.UserCreateInput = await req.json();

   if (!body.email || !body.name) {
     return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
   }

  try {
    const user = await db.user.create({ data: body });
    return NextResponse.json(user);
  } catch {
    return NextResponse.json({ 
      error: 'Failed to create user' 
    }, { status: 500 });
  }
}