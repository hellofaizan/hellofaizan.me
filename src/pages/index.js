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
      <p className="text-3xl font-bold underline">
        Bunny Nalla Ha
      </p>
    </div>
    </>
  )
}

export default Home