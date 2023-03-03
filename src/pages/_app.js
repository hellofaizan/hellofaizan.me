import '@/styles/globals.css'
import Head from 'next/head'
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from './components/Nav';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>HelloFaizan - Software Enthusiast</title>
        <link rel="icon" href="/faizan.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#171717" />
        <meta name="google-site-verification" content="qF_JdHZXqVUD4Lr5OUovfDC7Tck7Kyw2rynWP97sa5M" />
        <meta
          name="keywords"
          content="HelloFaizan, Faizan Blog, HelloFaizan blog, CuriousFaizan, web developer, github, typescript, nextjs"
        />
        <meta name="description" content="HelloFaizan - Software Enthusiast" />
        <meta name="author" content="Hello Faizan" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>
      <div className='bg-[#ededed] dark:bg-[#282828] p-5 text-black h-screen dark:text-white'>
        <Nav/>
        <Component {...pageProps} />
      </div>
    </>
  )
}
