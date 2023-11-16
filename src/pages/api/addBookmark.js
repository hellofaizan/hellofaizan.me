// post request to add a bookmark
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function handler(req, res) {
    const { url } = req.body
    const bookmark = await prisma.bookmarks.create({
        data: {
            url: url
        }
    })
    res.status(200).json({ data: bookmark })
}