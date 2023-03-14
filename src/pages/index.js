import React from 'react'
import Mspotify from './components/Mspotify'
import Link from 'next/link'
import RepoItem from './components/RepoItems'
import Online from './components/Online'
import Work from './components/Work'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Home = () => {
  const [stats, setStats] = useState({})
  const [topRepos, setTopRepos] = useState([])
  useEffect(() => {
    axios.get("https://api.github-star-counter.workers.dev/user/hellofaizan")
      .then((res) => {
        setStats(res.data)
      })
      .catch((err) => {
        console.log(err)
      })

    axios.get("https://api.github.com/users/hellofaizan/repos?type=owner&per_page=100")
      .then((res1) => {
        const topRepos = res1.data
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
        setTopRepos(topRepos)
      }
      )
      .catch((err1) => {
        console.log(err1)
      }
      )
  }, [])

  return (
    <>
      <div className='container flex flex-col max-w-[760px] mx-auto md:mt-32 mt-24 sm:mt-32'>
        <div className='flex flex-row items-center gap-3 mb-3'><h1 className='font-bold text-[32px] sm:text-5xl'>Hey! 👋 Faizan here</h1><Online /></div>
        <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-8">
          I&apos;m a self-taught software engineer from the Kashmir India. I&apos;m currently pursuing full-stack web
          development and Android Development to create stunning user experiences on the front-end, and scalable and secure infrastructure
          on the backend.
        </p>
        <h1 className='font-bold text-3xl sm:text-5xl mb-3'>What I Do 💭</h1>
        <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide">
          I&apos;m passionate about everything technology; from designing and developing software, to understanding how the many moving parts of the internet work together, to cybersecurity, systems, programming, and so much more. I strive to learn more about these things every day, and utilize my knowledge to further understand how or why the technology around us works.
        </p>
        <Work />
        <h1 className='font-bold text-3xl sm:text-5xl mb-3 mt-8'>Projects 🛠️</h1>
        <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-4">
          In my free time, I enjoy creating open source projects on{" "}
          <a
            href="/github"
            target={"_blank"}
            rel="noreferrer"
            className="font-semibold text-violet-500 hover:underline"
          >
            GitHub
          </a>
          , so I can learn from others and showcase what I know. In total, all of my open sourced projects have
          earnt me <span className="font-bold text-black dark:text-slate-200">{stats.stars}</span> stars on
          GitHub, and <span className="font-bold text-black dark:text-slate-200">{stats.forks}</span> forks. Below
          are some of my most popular repositories.
        </p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-6 gap-2">
          {topRepos && topRepos.map((repo) => {
            return (
              <RepoItem
                name={repo.name} desc={repo.description} lang={repo.language} stars={repo.stargazers_count} forks={repo.forks_count} key={repo.name}
              />
            );
          })}
        </div>
        <Mspotify />

      </div>

      <div className="sm:flex hidden fixed right-0 bottom-0 p-4">
        <Link href={"/discord"} target="_blank" className="rounded-lg bg-indigo-600 px-4 py-3 text-white shadow-lg">
          <p className='text-base'>I started a community on Discord. Join Now <i className='bi bi-discord'></i></p>
        </Link>
      </div>
    </>
  )
}


export default Home