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
import ScrollAnimation from "@/components/ScrollAnimation"
import { LazyLoad } from "@/components/LazyLooad"

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
          <ScrollAnimation>
          <Hero />
          </ScrollAnimation>
         <ScrollAnimation>
         <LazyLoad>
          <Services />
          </LazyLoad>
         </ScrollAnimation>

         <ScrollAnimation>
         <LazyLoad>
          <WhyUs />
          </LazyLoad>
         </ScrollAnimation>

            <ScrollAnimation>
            <LazyLoad>
         <Analysis />
         </LazyLoad>
            </ScrollAnimation>
          
          <ScrollAnimation> <LazyLoad><AnalysisWriteup/></LazyLoad></ScrollAnimation>
         <ScrollAnimation><LazyLoad> <Satoshi /></LazyLoad></ScrollAnimation>
          <ScrollAnimation><LazyLoad><SatoshiAnalysis/></LazyLoad></ScrollAnimation>
          <ScrollAnimation><LazyLoad>  <Reviews /> </LazyLoad></ScrollAnimation>
            <ScrollAnimation><LazyLoad> <AlphaCall/></LazyLoad></ScrollAnimation>
          <ScrollAnimation><LazyLoad><Footer /></LazyLoad></ScrollAnimation>
        </div>
      </div>
    </>
  )
}

export default Home 