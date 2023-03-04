import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import classNames from '../utils/classNames'

const Nav = () => {
    const router = useRouter();

    const LandingBtn = ({ name, link, selected }) => {
        return (
            <Link className={classNames(
                selected
                    ? "bg-black/10 dark:bg-[#c8c8dc]/10"
                    : "bg-transparent hover:bg-gray-700/5 dark:hover:bg-[#c8c8dc]/5 dark:text-white",
                "rounded-lg px-3 py-2"
            )} href={link}> {name} </Link>
        );
    }

    return (
        <div className='flex justify-center'>
            <div className='z-[999] sm:mt-4 fixed w-full md:w-[50rem] bg-[#d4d4d4]/40 dark:bg-[#393939]/40 sm:border sm:dark:border-slate-600 sm:border-slate-300 backdrop-blur-lg md:rounded-lg overflow-hidden'>
                <nav aria-label="Site Nav" className="flex justify-between items-center px-6 py-3 " >

                    <ul className="flex items-center md:gap-1 text-md font-medium dark:text-gray-300 ">
                        <li className='h-10 w-10'>
                            <Link href="/">
                                <Image src="/Dfaizan.png" alt="HelloFaizan" width={50} height={50} />
                            </Link>
                        </li>
                        <li className="dark:hover:text-gray-100 ">
                            <LandingBtn name="Contact" link="/Contact" selected={router.pathname === "/Contact"} />
                        </li>

                        <li className='dark:hover:text-gray-100 '>
                            <LandingBtn name="Projects" link="/Projects" selected={router.pathname === "/Projects"} />
                        </li>

                        <li className='px-2 bg-transparent hover:bg-gray-700/5 dark:hover:bg-[#c8c8dc]/5 dark:text-white rounded-lg'>
                            <Link className="inline-flex items-baseline justify-center gap-1 rounded-lg px-2 py-2" href="" target="_blank" passHref >
                                External
                                <i className='bi bi-box-arrow-up-right h-4 w-4'></i>
                            </Link>
                        </li>
                    </ul>

                    <ul className='hidden sm:flex items-center gap-4 text-xl font-medium dark:text-gray-300'>
                        <li><Link href={"/discord"}><i className='bi bi-discord'></i></Link></li>
                        <li><Link href={"/github"}><i className='bi bi-github'></i></Link></li>
                        <li><Link href={"/twitter"}><i className='bi bi-twitter'></i></Link></li>
                        <li><Link href={"/mail"}><i className='bi bi-envelope-at'></i></Link></li>
                    </ul>
                </nav>
                
            </div>
        </div>
    )
}

export default Nav
