import { prisma } from "@/app/lib/prisma"

export async function POST(request: Request) {
  const data = await request.json()

  const item = await prisma.pantry.create({ data: {
    ...data,
    expiration: new Date(data.expiration)
  }})

  return Response.json({item})
}