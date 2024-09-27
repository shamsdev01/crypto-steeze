import React from 'react';

interface ServiceItem {
  title: string;
  subtitle: string;
  items: string[];
}

const ServiceCard = ({ title, subtitle, items }: ServiceItem) => (
  <div className="flex flex-col">
    <h3 className="text-xl font-bold mb-1 text-white flex items-center justify-center">{title}</h3>
    <p className="text-sm mb-2 text-white flex items-center justify-center">{subtitle}</p>
    <div className="bg-gradient-to-b from-[#001F3F] to-[#034D99] rounded-xl p-4 text-white h-full">
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index} className="text-sm text-black">{item}</li>
        ))}
      </ul> 
    </div>
  </div>
);

const Services = () => {
  const services: ServiceItem[] = [
    {
      title: "Holder",
      subtitle: "Where crypto meets confidence",
      items: ["Mining App", "Telegram Airdrop", "Testnet Airdrops", "Success Rate"]
    },
    {
      title: "Flipper",
      subtitle: "Flip your way to crypto success",
      items: ["Minning apps", "Airdrop guide","Low gas fee tricks", "Honeypot alert", "Telegram airdrop","ICO/IDO calls","Test net airdrops","Meme coins calls","Market analysis","Success rate"]
    },
    {
      title: "Satoshi",
      subtitle: "Unlock elite crypto insights with satoshi",
      items: ["Mining apps", "Airdrop guide", "Honeypot alert", "Low gas fee tricks", "ICO/IDO calls", "Telegram airdrops", "Test net airdrops", "Meme coins call", "NFTs calls", "Retroactive airdrops", "Market analysis", "T.A mentorship", "Crypto anf forex trading signals", "Successn rate"]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#034D99] via-[#034D99] to-[#F5F5F5] rounded-[50px] p-8">
      <h2 className="text-2xl font-bold text-white text-center mb-2">Our Services</h2>
      <p className="text-center font-bold mb-6 text-white">Trade with us</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
      <div className="flex justify-around space-x-4">
       <div className="">
       <button className="border-[3px] border-[#288232] bg-gradient-to-r from-[#001F3F] to-[#F5F5F5] flex w-[400px] py-[15px] px-0 justify-center items-center">
          Free Mode
        </button>
        <span className=" flex items-center text-black justify-center mt-2">Can only check<br></br>
        two projects per week</span>
       </div>
        <div className="">
        <button className="border-[3px] border-[#288232] bg-gradient-to-r from-[#001F3F] to-[#F5F5F5] flex w-[400px] py-[15px] px-0 justify-center items-center">
  Buy Gas Fee
</button>
        <span className=" flex items-center text-black justify-center">Never run out of gas fee <br></br>  deposit ahead and buy at <br></br> current market rate </span>


        </div>
      </div>
    </div>
  );
};

export default Services;