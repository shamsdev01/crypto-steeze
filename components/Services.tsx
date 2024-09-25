import React from "react";
import Container from "./Container";

export const Services = () => {
  return (
    <Container>
        <div className=" flex justify-center flex-wrap">
            <h1 className="text-white text-2xl p-2"> Our Services</h1>
        </div>
        <span className=" flex justify-center flex-wrap mb-3 font-bold">Trade with us</span>
      <div className="grid gap-10  mb-8 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col gap-2 w-full h-full bg-blue-500 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <span className=" text-2xl">Holder</span>
            <span className="text-1xl">Where crypto meets confidence </span>
                <div className="">
                <li>Mining App</li>
                <li>Telegram Airdrop</li>
                <li>Testnet Airdrops</li>
                <li>Success Rate</li>
                </div>
          </div>
        </div>
        <div className="">
          <div className="flex flex-col gap-3  w-full h-full bg-blue-500 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <span className=" text-2xl">Flipper</span>
          <span className="text-1xl">flip your way to crypto success</span>
                <div className="">
                <li>Airdrop Guide</li>
                <li>Low gas fee tricks</li>
                <li>Honeypot alert</li>
                <li>ICO/IDO calls</li>
                <li>Meme coins calls</li>
                <li>Market analysis</li>
                <li>Success rate</li>
                </div>

            {/* <Avatar
              image={}
              name="Dylan Ambrose"
              title="Lead marketer at Netflix"
            /> */}
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-blue-500 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
          <span className=" text-2xl">Satoshi</span>
          <span className="text-1xl">Unlock elite crypto insights with satoshi</span>
                <div className="">
                <li>NFTs calls</li>
                <li>Retroactive airdrops</li>
                <li>Market analysis</li>
                <li>T.A mentorship</li>
                <li>Successn Rate</li>
                <li>Crypto anf forex trading signals</li>
                </div>

          </div>
        </div>
      </div>
    <div className=" flex justify-around">
    <div className="flex   sm:space-x-5 sm:space-y-2 sm:items-center justify-center sm:flex-row">
            <a
              href=""
            //   target="_blank"x
              rel="noopener"
              className="px-4 py-2 text-lg font-medium text-center text-white bg-blue-600 rounded-md ">
                Free Mode
            </a>
          </div>
          <div className="flex   sm:space-x-5 sm:space-y-2 sm:items-center justify-center sm:flex-row">
            <a
              href=""
            //   target="_blank"x
              rel="noopener"
              className="px-4 py-2 text-lg font-medium text-center text-white bg-blue-600 rounded-md ">
              Buy Gas Fee
            </a>
          </div>
    </div>
    </Container>
  );
};
