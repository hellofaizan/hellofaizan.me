import { cn } from '@/lib/utils';
import { buttonVariants } from "@/components/ui/button"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import axios from 'axios';
import { ChevronUp } from 'lucide-react';

const BookmarkComonent = ({ id, url, bookmark }) => {
    const [title, setTitle] = React.useState('')
    url = url.startsWith("http") ? url : `https://${url}`;
    const hostname = new URL(url).hostname;

    const getTitle = async () => {
        const title = await axios.get(`https://api.microlink.io/?url=${url}`).then((res) => {
            return res.data.data.title
        })
        setTitle(title)
        return title
    }

    getTitle()

    return (
        <div className={cn(
            'flex flex-row items-center justify-between',
            buttonVariants({ variant: 'ghost', size: "card" }),
        )}>
            <Link className='w-full flex items-center justify-between gap-x-2' href={url} target='_blank'>
                <div className='flex flex-row gap-x-2'>
                    <Image src={`https://icon.horse/icon/${hostname}`} alt={hostname} width={46} height={46} />
                    <div className='flex flex-col'>
                        <h1 className='w-52 md:w-96 font-semibold text-base sm:text-xl text-gray-800 flex-nowrap overflow-hidden text-ellipsis'>{title}</h1>
                        <p className='text-gray-500 dark:text-gray-400'>{hostname}</p>
                    </div>
                </div>

                <div className='flex flex-row gap-1'>
                    <ChevronUp />
                </div>
            </Link>
        </div>
    )
}

export default BookmarkComonent