import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Image from 'next/image'

const Spotify = () => {
    const [data, setData] = useState("")
    useEffect(() => {
        axios.get('https://api.lanyard.rest/v1/users/890232380265222215')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
        return () => {
            data
        }
    }, [data]) //data.data?.listening_to_spotify
    if (data.data?.listening_to_spotify === true) {
        return (
            <div className='flex sm:hidden justify-between gap-2'>
            <div className='flex flex-col justify-start items-start'>
                <h1 className='text-[#1e1e1e] dark:text-[#fff] font-bold text-sm text-ellipsis'>Listening {data?.data?.spotify?.song}</h1>
                <h1 className='text-[#3e3e3e] dark:text-[#c1c1c1] text-sm'>{data?.data?.spotify?.artist} - Spotify</h1>
            </div>

            <i className='bi bi-spotify text-3xl flex justify-center items-center text-[#3e3e3e] dark:text-[#c1c1c1]'></i>
            
        </div>
        )
    }
    return (
        <div className='flex sm:hidden justify-between gap-2'>
            <div className='flex flex-col justify-start items-start'>
                <h1 className='text-[#1e1e1e] dark:text-[#fff] font-bold text-base'>Not listening to</h1>
                <h1 className='text-[#3e3e3e] dark:text-[#c1c1c1] text-sm'>Spotify</h1>
            </div>

            <i className='bi bi-spotify text-3xl flex justify-center items-center text-[#3e3e3e] dark:text-[#c1c1c1]'></i>
            
        </div>
    )
}

export default Spotify
