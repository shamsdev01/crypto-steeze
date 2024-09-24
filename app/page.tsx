
// import Image from 'next/image'

// import { Header } from "@/components/Header"
import Hero from "@/components/Hero"
import { Navbar } from "@/components/Navbar"
import { Services } from "@/components/Services"
import Head from "next/head"

const Home= () => {
  return (
    <>
    <div className=" min-h-screen text-white">
      <Head>
            <title> Crypto-Steeze </title>
            <link rel="icon" href="/favicon.ico" />
      </Head>
          <Navbar/>
          <Hero/>
          <Services/>
    </div>

    </>
  )
}

export default Home