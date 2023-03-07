import React, { useRef } from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import Image from 'next/image';

const Work = () => {
    var actt = useRef(0)
    const [data, setData] = useState("")
    useEffect(() => {
        axios.get('https://api.lanyard.rest/v1/users/890232380265222215')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [data])

    if (!data) return

    (data?.data?.listening_to_spotify === false) ? actt = 1 : actt = 2


    if (data?.data?.activities[actt]?.type === 0) {
        const large_image = data?.data?.activities[actt]?.assets?.large_image
        const small_image = data?.data?.activities[actt]?.assets?.small_image

        let unix_timestamp = data?.data?.activities[actt]?.timestamps?.start
        var date = new Date(unix_timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        return (
            <>
                <h1 className='font-bold text-3xl sm:text-5xl mb-4'>🧑‍💻 Working on...</h1>
                <div className="flex items-center md:space-x-7 space-x-4 mb-10">
                    <div className='relative'>
                        <Image src={`https://media.discordapp.net/${large_image.replace("mp:", "")}`} width="500" title={data?.data?.activities[actt]?.assets?.large_text} height="500" className='md:h-32 md:w-32 sm:h-24 w-24 rounded-[10px]' alt="Visual Studio Code" />
                        <Image src={`https://media.discordapp.net/${small_image.replace("mp:", "")}`} title={(data?.data?.activities[actt]?.assets?.large_text) ? data?.data?.activities[actt]?.name : data?.data?.activities[actt]?.assets?.small_text} width="500" height="500" className='md:h-12 md:w-12 h-10 w-10 rounded-full absolute bottom-0 right-0 -mb-2 -mr-2 border-4 border-transparent' alt="Visual Studio Code" />
                    </div>
                    <div className='flex flex-col'>
                        <h1 className="text-[20px] md:text-2xl font-bold">{data?.data?.activities[actt]?.name}</h1>
                        <p className='truncate text-sm md:text-lg'>{data?.data?.activities[actt]?.state}</p>
                        <p className='truncate text-sm md:text-lg'>{data?.data?.activities[actt]?.details}</p>
                        <p className='truncate text-sm md:text-lg'>Working from {formattedTime} hours</p>
                    </div>
                </div>
            </>
        )
    }



    return (
        null
    )
}

export default Work