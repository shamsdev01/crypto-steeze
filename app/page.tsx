
// import Image from 'next/image'

// import { Header } from "@/components/Header"
import Analysis from "@/components/Analysis"
import Hero from "@/components/Hero"
import { Navbar } from "@/components/Navbar"
import Reviews from "@/components/Reviews"
import { Services } from "@/components/Services"
import WhyUs from "@/components/WhyUs"

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
          <WhyUs/>
          <Analysis/>
          <Reviews/>
    </div>

    </>
  )
}

export default Home