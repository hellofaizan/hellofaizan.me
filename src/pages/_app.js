import '@/styles/globals.css'
import Head from 'next/head'
import "bootstrap-icons/font/bootstrap-icons.css";
import Nav from '@/components/Nav';
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>HelloFaizan - Software Enthusiat Portfolio</title>
        <link rel="icon" href="https://hellofaizan.me//Dfaizan.png" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#171717" />
        <meta name="google-site-verification" content="qF_JdHZXqVUD4Lr5OUovfDC7Tck7Kyw2rynWP97sa5M" />
        <meta
          name="keywords"
          content="HelloFaizan, Faizan Blog, HelloFaizan blog, CuriousFaizan, web developer, github, typescript, nextjs, hellofaizan portfolio"
        />
        <meta name="description" content="A full-stack developer, Building Seamless mobile & web applications." />
        <meta name="author" content="Hello Faizan" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />


        <meta property="og:title" content="HelloFaizan | Software Enthusiast" />
        <meta property="og:site_name" content="HelloFaizan | Software Enthusiast Portfolio" />
        <meta property="og:url" content="https://www.hellofaizan.me" />

        <meta
          property="og:description"
          content="A full-stack developer, Building Seamless mobile & web applications."
        />

        <meta
          property="og:image"
          itemProp="image"
          content="https://hellofaizan.me/metaimage.jpg"
        />

        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@HelloFaizandev" />
        <meta name="twitter:creator" content="@HelloFaizandev" />
        <meta name="twitter:title" content="HelloFaizan | Software Enthusiast" />
        <meta
          name="twitter:description"
          content="A full-stack developer, Building Seamless mobile & web applications."
        />
        <meta
          name="twitter:image"
          itemProp="image"
          content="https://hellofaizan.me/metaimage.jpg"
        />

        <script async src="https://stats.hellofaizan.me/script.js" data-website-id="005b0a01-73c3-49fb-b466-b33809f4e6cd"></script>

      </Head>
      <div className="h-full min-h-screen w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:z-[-2] dark:bg-[#000000] dark:bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] dark:bg-[size:20px_20px]">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          <Component {...pageProps} />
          <Toaster />
        </ThemeProvider>
      </div>
    </>
  )
}
