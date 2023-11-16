// fetch all bookmarks
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    const bookmarks = await prisma.bookmarks.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    res.status(200).json({ data: bookmarks })
}