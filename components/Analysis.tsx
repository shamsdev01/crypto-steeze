import React from 'react'
import Image from 'next/image'
// import Container from './Container'

const Analysis = () => {
  return (
    // <Container>
       <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-8">
    <div className="w-full sm:w-1/2 order-2 sm:order-2 flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-4">
      <span className="text-[#034D99]">Project</span> Analysis & Articles
      </h1>
      <div className="text-white text-1xl p-4">
      <div className="flex gap-5 ">
      <li>Project Name: Blum </li>  <Image
        src="/assets/images/blum.png"
        alt="Crypto Steeze Logo"
        width={40}
        height={40}
        className="rounded-lg shadow-lg"
      />
      </div>
      <li>Success rate: 80%</li>
      </div>
      <span className="font-bold ">Instagram :</span>
      <span className="font-bold ">Facebook :</span>
      <span className="font-bold ">Twitter :</span>
      <div className="flex">
      <Image
        src="/assets/images/Group 21.png"
        alt="Crypto Steeze Logo"
        width={90}
        height={90}
        className="rounded-lg shadow-lg"
      />
      <h4 className=" font-bold">Summary:</h4>
      <h3>This project as 80% success rate
      is a good one</h3>
      </div>
      <h3 className=" font-bold mt-2">Note:</h3>
      <span className="">Come back for new development from the project</span>
    </div>
    <div className="w-full sm:w-1/2 order-2 sm:order-1 flex items-center ">
      <Image
        src="/assets/images/mobileBitcoin.png"
        alt="Crypto Steeze Logo"
        width={400}
        height={400}
        className="rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>
        // </Container>
  )
}

export default Analysis
