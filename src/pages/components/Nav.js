import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
  return (
    <nav aria-label="Site Nav" class="mx-auto flex max-w-3xl mt-2 items-center justify-between px-6 py-1 backdrop-blur-md border dark:border-gray-600 overflow-hidden rounded-xl" >
          <Link href="/" class="inline-flex h-10 w-10 gap-2 items-center justify-center rounded-lg " >
            <Image className='' src="/Dfaizan.png" alt="HelloFaizan" width={50} height={50} />
          </Link>

          <ul class="flex items-center gap-2 text-sm font-medium dark:text-gray-300 ">
            <li class="hidden md:block dark:hover:text-gray-100 ">
              <Link class="rounded-lg px-3 py-2" passHref href="/"> Home </Link>
            </li>

            <li className='dark:hover:text-gray-100 '><Link passHref class="rounded-lg px-3 py-2" href=""> Projects </Link></li>

            <li className='dark:hover:text-gray-100 '>
              <Link class="inline-flex items-center gap-2 rounded-lg px-3 py-2" href="" target="_blank" passHref >
                External
                <i className='bi bi-box-arrow-up-right h-4 w-4'></i>
              </Link>
            </li>
          </ul>
        </nav>
  )
}

export default Nav
