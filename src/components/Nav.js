import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import classNames from '../pages/utils/classNames'
import { useState } from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import { useToast } from "@/components/ui/use-toast"

const Nav = () => {
    const [show, setShow] = useState(false)
    const router = useRouter();
    const { toast } = useToast()

    const LandingBtn = ({ name, link, selected }) => {
        return (
            <Link className={classNames(
                selected
                    ? "bg-gray-500/10 dark:bg-[#c8c8dc]/10"
                    : "bg-transparent hover:bg-gray-700/5 dark:hover:bg-[#c8c8dc]/5 dark:text-white",
                "rounded-lg px-3 py-2"
            )} href={link} > {name} </Link>
        );
    }

    const copyEmail = () => {
        // copy email to clipboard
        navigator.clipboard.writeText('faizancurious@gmail.com').then(
            function () {
                toast({
                    title: "Email Copied!",
                })
            }
            , function (err) {
                toast({
                    title: "Failed to Copy Email!",
                    description: err,
                })
            }
        );

    }

    return (
        <div className='flex justify-center'>
            <div className='z-[999] sm:mt-4 fixed w-full md:w-[50rem] bg-slate-100/40 dark:bg-[#393939]/40 sm:border sm:dark:border-slate-600 sm:border-slate-300 backdrop-blur-lg md:rounded-lg'>
                <nav aria-label="Site Nav" className="flex flex-col px-6 py-3 " >
                    <div className='flex justify-between items-center w-full'>
                        <ul className="flex items-center md:gap-1 text-md font-medium dark:text-gray-300 ">
                            <li className='h-10 w-10 mr-2'>
                                <Link href="/">
                                    <Image src="/Dfaizan.png" title='Home Screen' alt="HelloFaizan" width={50} height={50} priority />
                                </Link>
                            </li>
                            <li className="dark:hover:text-gray-100 ">
                                <LandingBtn name="Home" link="/" selected={router.pathname === "/"} />
                            </li>

                            <li className='dark:hover:text-gray-100 '>
                                <LandingBtn name="Contact" link="/contact" selected={router.pathname === "/contact"} />
                            </li>

                            <li className='dark:hover:text-gray-100 ml-3'>
                                <LandingBtn name="Bookmarks" link="/bookmark" selected={router.pathname === "/bookmark"} />
                            </li>


                        </ul>

                        <ul className='hidden sm:flex items-center gap-4 text-xl font-medium dark:text-gray-300'>
                            <li><TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild><Link href={"/discord"} target="_blank"><i className='bi bi-discord'></i></Link></TooltipTrigger>
                                    <TooltipContent>
                                        <p>Discord</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            </li>
                            <li><TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild><Link href={"/github"} target="_blank"><i className='bi bi-github'></i></Link></TooltipTrigger>
                                    <TooltipContent>
                                        <p>Github</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider></li>
                            <li>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild><Link href={"/twitter"} target="_blank"><i className='bi bi-twitter'></i></Link></TooltipTrigger>
                                        <TooltipContent>
                                            <p>Twitter 𝕏</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </li>
                            <li>
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger asChild><button onClick={copyEmail}><i className='bi bi-envelope-at'></i></button></TooltipTrigger>
                                        <TooltipContent>
                                            <p>Copy👉 faizancurious@gmail.com</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Nav
