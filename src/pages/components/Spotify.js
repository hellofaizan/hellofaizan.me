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
            <div className="fixed left-2 bottom-2 w-[20rem] h-[7rem] hidden md:flex flex-col items-start justify-start">
                <h1 className="text-black dark:text-gray-100 font-FFsemibold text-base mb-2 flex items-center justify-center">
                    Listening to Spotify
                    {/* Loading Dot Animation */}
                    <span className="ml-2 w-2 h-2">
                        <span className="absolute w-2 h-2 bg-red-600 rounded-full animate-ping" />
                        <span className="absolute w-2 h-2 bg-red-600 rounded-full" />
                    </span>
                </h1>

                <div className="w-full h-[6rem] flex flex-row items-center justify-start">
                    {data?.data?.spotify?.album_art_url &&
                        <Image width={72} height={72} src={data?.data?.spotify?.album_art_url} className="w-[4.5rem] h-[4.5rem] rounded-md mr-4 pointer-events-none" alt={data?.data?.spotify?.album} />
                    }
                    <div className="w-56 h-full flex flex-col items-start justify-center">
                        <a href={`https://open.spotify.com/track/${data?.data?.spotify?.track_id}`} target="_blank" rel="noreferrer" className="w-full font-medium text-gray-900 dark:text-[#e1eafd] hover:text-yellow-400 truncate" >
                            {data?.data?.spotify?.song} <i className='bi bi-box-arrow-up-right'></i>
                        </a>
                        <p className="w-full text-gray-600 dark:text-[#cad2e0] font-normal text-sm truncate">
                            {data?.data?.spotify?.artist}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        null
    )
}

export default Spotify
