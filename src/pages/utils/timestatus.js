import React from 'react'
import { useEffect, useState } from "react";

const TimeStatus = () => {
    const [time, setTime] = useState("00:00:00 p.m.");
    const [awake, setAwake] = useState(true);

    function updateTime() {
        let current = new Date().toLocaleString("en-In", { timeZone: "Asia/Kolkata" });
        setTime(`${current.slice(-11, -6)}${current.slice(-3, -1)}.m`);
        setTimeout(updateTime, 60 * 1000);

        if (new Date().getHours() < 7) setAwake(false);
    }
    useEffect(() => {
        updateTime();
    }, []);
  return (
    <p className="text-black/50 dark:text-white/50 text-sm mt-7 mb-6">
            It&apos;s currently <span className="font-semibold text-black/60 dark:text-white/60">{time}</span> for me, so I&apos;m
            probably{" "}
            <span className="font-semibold text-black/60 dark:text-white/60">{awake ? "awake" : "sleeping"}</span>. I&apos;ll
            get back to you soon.
        </p>
  )
}

export default TimeStatus