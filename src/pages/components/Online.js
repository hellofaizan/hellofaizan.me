import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useMemo } from 'react'

const Online = () => {
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

    // switch (data?.data?.discord_status) {
    //     case "online":
    //         return (
    //             <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
    //         )
    //     case "idle":
    //         return (
    //             <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" />
    //         )
    //     case "dnd":
    //         return (
    //             <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
    //         )
    //     case "offline":
    //         return (
    //             <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse" />
    //         )
    //     default:
    //         return (
    //             <div className="w-3 h-3 bg-gray-500 rounded-full animate-pulse" />
    //         )
    // }
    if (data?.data?.discord_status === "dnd") {
        return (
            <span className="ml-2 w-3 h-3">
                <span className="absolute w-3 h-3 bg-red-600 rounded-full animate-ping" />
                <span className="absolute w-3 h-3 bg-red-600 rounded-full" />
            </span>
        )
    }
    if (data?.data?.discord_status === "idle") {
        return (
            <span className="ml-2 w-3 h-3">
                <span className="absolute w-3 h-3 bg-yellow-400 rounded-full animate-ping" />
                <span className="absolute w-3 h-3 bg-yellow-400 rounded-full" />
            </span>
        )
    }
    if (data?.data?.discord_status === "online") {
        return (
            <span className="ml-2 w-3 h-3">
                <span className="absolute w-3 h-3 bg-green-500 rounded-full animate-ping" />
                <span className="absolute w-3 h-3 bg-green-500 rounded-full" />
            </span>
        )
    }
    return (
        <span className="ml-2 w-3 h-3">
            <span className="absolute w-3 h-3 bg-gray-500 rounded-full animate-ping" />
            <span className="absolute w-3 h-3 bg-gray-500 rounded-full" />
        </span>
    )
}


export default Online