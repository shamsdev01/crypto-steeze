// import Head from "next/head"
import { Navbar } from "@/components/Navbar"
import Hero from "@/components/Hero"

import WhyUs from "@/components/WhyUs"
import Analysis from "@/components/Analysis"
import Satoshi from "@/components/Satoshi"
import Reviews from "@/components/Reviews"
import { Footer } from "@/components/Footer"
import Services from "@/components/Services"
import AnalysisWriteup from "@/components/AnalysisWriteup"
import SatoshiAnalysis from "@/components/SatoshiAnalysis"
import AlphaCall from "@/components/AlphaCall"

const Home = () => {
  return (
    <>
      <div 
        className="relative min-h-screen overflow-hidden"
        style={{
          backgroundImage: "url('/assets/images/landingPage1.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="relative z-10">
          {/* <Head>
            <title>Crypto-Steeze</title>
            <link rel="icon" href="/favicon.ico" />
          </Head> */}
          <Navbar />
          <Hero />
          <Services />
          <WhyUs />
          <Analysis />
          <AnalysisWriteup/>
          <Satoshi />
          <SatoshiAnalysis/>
          <Reviews /> 
          <AlphaCall/>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home 