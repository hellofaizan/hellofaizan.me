import React from 'react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps = async () => {
  const res = await fetch('https://api.lanyard.rest/v1/users/890232380265222215')
  const data = await res.json()

  return {
    props: { data },  
  }
}

const Home = ({data}) => {  
  console.log(data)
  
  return (
    <>
    <div>
      {/* Centre div */}
      <div className="flex flex-col items-center justify-center h-screen w-screen py-2">
        <p>Kinda Lazy. Will code sooner or later. Hehe</p>
        Faizan
      </div>
    </div>
    </>
  )
}

export default Home