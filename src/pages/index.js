import React from 'react'
import { Inter } from '@next/font/google'
import Nav from './components/Nav'

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
        <h1 className='font-bold text-3xl sm:text-5xl mb-3'>What&apos;s on my mind 🤔</h1>
      </div>
    </>
  )
}

export default Home