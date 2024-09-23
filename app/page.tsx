
// import Image from 'next/image'

// import { Header } from "@/components/Header"
import { Navbar } from "@/components/Navbar"
import Head from "next/head"

const Home= () => {
  return (
    <>
    <div className="bg-gradient-to-b from-blue-900 to-blue-950 min-h-screen text-white">
      <Head>
            <title> Crypto-Steeze </title>
            <link rel="icon" href="/favicon.ico" />
      </Head>
          <Navbar/>
    </div>

    </>
  )
}

export default Home