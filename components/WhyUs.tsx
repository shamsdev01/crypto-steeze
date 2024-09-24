
import Container from "./Container"
import Image from "next/image"

const WhyUs = () => {
  return (

    <Container>
       <div className="container mx-auto px-4 py-8">
    <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-8">
    <div className="w-full sm:w-1/2 order-1 sm:order-1 flex flex-col justify-center">
      <h1 className="text-3xl font-bold mb-4">
        Stay ahead of the Crypto race with Cryptosteeze
      </h1>
      <p className="text-lg mb-4">
        Stay up-to-date with the latest news and trends in the crypto space.
        Follow our market insights to make informed decisions.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded self-start">
        Subscribe
      </button>
    </div>
    <div className="w-full sm:w-1/2 order-2 sm:order-2 flex items-center justify-center">
      <Image
        src="/assets/images/BitcoinLogo.png"
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

 export default WhyUs

