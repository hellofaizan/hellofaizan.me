import axios from 'axios'
import { Bookmark } from 'lucide-react'
import React from 'react'
import BookmarkComponent from '@/components/BookmarkComonent'
import { useEffect, useState } from 'react'

const Bookmarks = () => {
    const [bookmarks, setBookmarks] = useState('')

    useEffect(() => {
        axios.get('/api/bookmarks').then((res) => {
            setBookmarks(res.data.data)
        })
    }, [])

    return (
        <div className='min-h-screen flex flex-col max-w-[760px] px-3 md:px-0 mx-auto md:mt-32 mt-24 sm:mt-32'>
            <div className="flex flex-row items-center gap-x-2">
                <h1 className='font-bold text-3xl sm:text-5xl mb-3 dark:text-white'>Bookmarks</h1>
                <Bookmark className='h-5 w-5 md:h-8 md:w-8' />
            </div>
            <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide">
            Awesome things I&apos;ve found on the internet. One neat thing about this page is, I just need to send a command message to a discord bot and it adds the link in here to the list.
            </p>

            <div className='flex flex-col gap-y-2 mt-6 md:mt-8 mb-6'>
                {bookmarks.length > 0 ? (
                    bookmarks.map((bookmark) => (
                        <BookmarkComponent key={bookmark.id} url={bookmark.url} bookmark={bookmark} />
                    ))
                ) : (
                    // if loading
                    <div className='flex flex-col items-center justify-center'>
                        <div className='animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900 dark:border-gray-100'></div>
                    </div>


                )}
            </div>
        </div>
    )
}

// get server side props
// export async function getServerSideProps() {
    
//     return {
//         props: {
//             bookmarks
//         }
//     }
// }

export default Bookmarks
