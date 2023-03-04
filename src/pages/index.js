import React from 'react'
import { Inter } from '@next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

// export const getStaticProps = async () => {
//   const res = await fetch('https://api.lanyard.rest/v1/users/890232380265222215')
//   const data = await res.json()

//   return {
//     props: { data },
//   }
// }

const Home = ({ data }) => {
  console.log(data)

  return (
    <>
      <div className='container flex flex-col max-w-[760px] mx-auto md:mt-32 mt-28'>
        <h1 className='font-bold text-3xl sm:text-5xl mb-3'>Hey! 👋 Faizan here</h1>
        <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
          I&apos;m a self-taught software engineer from the Kashmir India. I&apos;m currently pursuing full-stack web
          development and Android Development to create stunning user experiences on the front-end, and scalable and secure infrastructure
          on the backend.
        </p>
        
      </div>
      <Link href={"/discord"} className="sm:flex hidden fixed right-0 bottom-0 p-4">
        <div className="rounded-lg bg-indigo-600 px-4 py-3 text-white shadow-lg">
          <p className='text-base'>I started a community on Discord. Join Now <i className='bi bi-discord'></i></p>
        </div>
      </Link>
    </>
  )
}

export default Home