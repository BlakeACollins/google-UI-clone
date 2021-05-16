import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Search It</title>
        <meta name="description" content="Generated by create next app. Search It, a Google Clone." />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <header className='flex w-full p-5 justify-between bg-red-300'>
        <div className='flex space-x-4 items-center'>
          <p>ABOUT</p>
          <p>STORE</p>
        </div>

        <div className='flex space-x-4 items-center'>
          <p>Gmail</p>
          <p>Images</p>

        </div>
      </header>



        <main>
          <h1 className='p-5'>Let's build a Google Clone!
          </h1>
        </main>
      
    </div>
  )
}