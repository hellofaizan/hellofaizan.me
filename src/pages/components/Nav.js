import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import classNames from '../utils/classNames'
import { useState } from 'react'

const Nav = () => {
    const [show, setShow] = useState(false)
    const router = useRouter();

    const LandingBtn = ({ name, link, selected }) => {
        return (
            <Link className={classNames(
                selected
                    ? "bg-black/10 dark:bg-[#c8c8dc]/10"
                    : "bg-transparent hover:bg-gray-700/5 dark:hover:bg-[#c8c8dc]/5 dark:text-white",
                "rounded-lg px-3 py-2"
            )} href={link} > {name} </Link>
        );
    }

    return (
        <div className='flex justify-center'>
            <div className='z-[999] sm:mt-4 fixed w-full md:w-[50rem] bg-[#d4d4d4]/40 dark:bg-[#393939]/40 sm:border sm:dark:border-slate-600 sm:border-slate-300 backdrop-blur-lg md:rounded-lg overflow-hidden'>
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
                                {
                                    !show ? <i className='bi bi-caret-down-fill' onClick={
                                        () => {
                                            setShow(!show)
                                        }
                                    }></i> : <i className='bi bi-caret-right-fill' onClick={
                                        () => {
                                            setShow(!show)
                                        }
                                    }></i>
                                }
                            </li>


                        </ul>

                        <ul className='hidden sm:flex items-center gap-4 text-xl font-medium dark:text-gray-300'>
                            <li><Link href={"/discord"} target="_blank"><i className='bi bi-discord'></i></Link></li>
                            <li><Link href={"/github"} target="_blank"><i className='bi bi-github'></i></Link></li>
                            <li><Link href={"/twitter"} target="_blank"><i className='bi bi-twitter'></i></Link></li>
                            <li><Link href={"/mail"} target="_blank"><i className='bi bi-envelope-at'></i></Link></li>
                        </ul>
                    </div>

                    <div className='mt-1'>
                        {
                            show
                                ? <div className='flex justify-between items-center'>
                                    <ul className='flex space-x-2'>
                                        <li className='dark:hover:text-gray-200'>
                                            <Link href="/blogs" target="_blank">• blogs</Link>
                                        </li>
                                    </ul>
                                    <ul className='flex sm:hidden items-center justify-center gap-3 text-lg font-medium dark:text-gray-300'>
                                        <li><Link href={"/discord"} target="_blank"><i className='bi bi-discord'></i></Link></li>
                                        <li><Link href={"/github"} target="_blank"><i className='bi bi-github'></i></Link></li>
                                        <li><Link href={"/twitter"} target="_blank"><i className='bi bi-twitter'></i></Link></li>
                                        <li><Link href={"/mail"} target="_blank"><i className='bi bi-envelope-at'></i></Link></li>
                                    </ul>
                                </div> : null
                        }
                    </div>
                </nav>

            </div>
        </div>
    )
}

export default Nav
