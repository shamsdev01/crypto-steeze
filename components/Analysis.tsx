import React from 'react'
import Image from 'next/image'
import Container from './Container'

const Analysis = () => {
  return (
    <Container>
       <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-8">
    <div className="w-full sm:w-1/2 order-2 sm:order-2 flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-4">
      Project Analysis & Articles
      </h1>
      <div className="text-white text-1xl">
      <li>Project Name: Blum</li>
      <li>Success rate: 80%</li>
      </div>
      <span className="font-bold ">Instagram :</span>
      <span className="font-bold ">Facebook :</span>
      <span className="font-bold ">Twitter :</span>
      <span className=" font-bold">Summary</span>
      <span>This project as 80% success rate
      is a good one</span>
      <h3 className=" font-bold mt-2">Note:</h3>
      <span className="">Come back for new development from the project</span>
      <button className="bg-blue-500 hover:bg-blue-300  text-white mt-6 font-bold py-2 px-4 rounded self-start">
        Explore
      </button>
    </div>
    <div className="w-full sm:w-1/2 order-2 sm:order-1 flex items-center ">
      <Image
        src="/assets/images/Blum-logo.png"
        alt="Crypto Steeze Logo"
        width={400}
        height={400}
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>
        </Container>
  )
}

export default Analysis
