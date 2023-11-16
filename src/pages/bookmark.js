import axios from 'axios'
import { Bookmark } from 'lucide-react'
import React from 'react'
import BookmarkComponent from '@/components/BookmarkComonent'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const Bookmarks = ({ bookmarks }) => {

    return (
        <div className='container flex flex-col max-w-[760px] mx-auto md:mt-32 mt-24 sm:mt-32'>
            <div className="flex flex-row items-center gap-x-2">
                <h1 className='font-bold text-3xl sm:text-5xl mb-3 dark:text-white'>Bookmarks</h1>
                <Bookmark className='h-8 w-8' />
            </div>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide">
                Have an inquiry, or want to connect? Feel free to leave a message below, or get in touch via Discord, Twitter, or email.
            </p>

            <div className='flex flex-col gap-y-2 mt-6 md:mt-8'>
                {bookmarks.length > 0 ? (
                    bookmarks.map((bookmark) => (
                        <BookmarkComponent key={bookmark.id} url={bookmark.url} bookmark={bookmark} />
                    ))
                ) : (
                    <p className='text-gray-800 '>No bookmarks yet.</p>

                )}
            </div>
        </div>
    )
}

// get server side props
export async function getServerSideProps() {
    const data = await prisma.bookmarks.findMany({
        orderBy: {
            createdAt: 'desc'
        }

    })
    const bookmarks = JSON.parse(JSON.stringify(data))
    return {
        props: {
            bookmarks
        }
    }
}

export default Bookmarks