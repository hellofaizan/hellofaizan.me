import React from 'react'
import { Inter } from '@next/font/google'
import Link from 'next/link'
import RepoItem from './components/RepoItems'

const inter = Inter({ subsets: ['latin'] })

const Home = ({ stats, topRepos }) => {
  return (
    <>
      <div className='container flex flex-col max-w-[760px] mx-auto md:mt-32 mt-28'>
        <h1 className='font-bold text-3xl sm:text-5xl mb-3'>Hey! 👋 Faizan here</h1>
        <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-12">
          I&apos;m a self-taught software engineer from the Kashmir India. I&apos;m currently pursuing full-stack web
          development and Android Development to create stunning user experiences on the front-end, and scalable and secure infrastructure
          on the backend.
        </p>
        <h1 className='font-bold text-3xl sm:text-5xl mb-3'>Projects 🛠️</h1>
        <p className="text-gray-800 dark:text-gray-300 leading-6 tracking-wide mb-4">
          In my free time, I enjoy creating open source projects on{" "}
          <a
            href="https://github.com/hellofaizan"
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
        <div className="w-full grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 mb-12 gap-2">
                {topRepos && topRepos.map((repo) => {
                    return (
                        <RepoItem
                            name={repo.name} desc={repo.description} lang={repo.language} stars={repo.stargazers_count} forks={repo.forks_count} key={repo.name}
                        />
                    );
                })}
            </div>

      </div>

      <div className="sm:flex hidden fixed right-0 bottom-0 p-4">
        <Link href={"/discord"} target="_blank" className="rounded-lg bg-indigo-600 px-4 py-3 text-white shadow-lg">
          <p className='text-base'>I started a community on Discord. Join Now <i className='bi bi-discord'></i></p>
        </Link>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const stats = await fetch(`https://api.github-star-counter.workers.dev/user/hellofaizan`).then(res => res.json());
  const repos = await fetch(`https://api.github.com/users/hellofaizan/repos?type=owner&per_page=100`).then(res =>
    res.json()
  );

  const topRepos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 4);

  return {
    props: { stats, topRepos },
    revalidate: 3600,
  };
}

export default Home