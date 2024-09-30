

// Hero Component
const Hero = () => {
  const [visits, setVisits] = useState<number>(0);
  const [signUps, setSignUps] = useState<number>(0);

  useEffect(() => {
    // Fetch statistics from an API
    fetch('/api/get-stats')
      .then((response) => response.json())
      .then((data) => {
        setVisits(data.visits);
        setSignUps(data.signUps);
      })
      .catch((error) => console.error('Error fetching stats:', error));
  }, []);

  return (
    <>
      <Container className="flex flex-wrap">
        <AnimatedSection direction="left">
          <div className="flex items-center w-full lg:w-1/2">
            <div className="max-w-2xl mb-8">
              <h1 className="text-3xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
                Unlock the <span className='text-blue-900'>Power</span> Of Crypto
              </h1>
              <span className="font-bold leading-snug tracking-tight mt-2 lg:leading-tight xl:leading-tight">
                We help you make informed choices in Cryptocurrency
              </span>
              <div className="flex flex-col items-start space-y-3 mt-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                <a href="/" target="_blank" rel="noopener" className="px-8 py-4 text-lg font-medium text-center text-white bg-[#034D99] rounded-md">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right">
          <div className="flex items-center justify-center w-full lg:w-1/2">
            <div className="">
              <Image
                src="/assets/images/crypto-steeze_logo.png"
                width="300"
                height="300"
                className="object-cover"
                alt="Hero Illustration"
                loading="eager"
              />
            </div>
          </div>
        </AnimatedSection>
      </Container>

      <Container>
        <AnimatedSection direction="bottom">
          <div className="flex flex-col justify-center mb-9">
            <div className="text-xl text-center text-white dark:text-white">
              Metrics:
            </div>
            <div className="flex sm:flex-row flex-col items-center justify-center gap-2 mt-5 md:justify-between">
              <div className="text-white dark:text-gray-400 text-2xl md:text-xl">Visitors: {visits}</div>
              <div className="text-white dark:text-gray-400 text-2xl md:text-xl">Community: {signUps}</div>
              <div className="text-white dark:text-gray-400 text-2xl md:text-xl">Projects: {visits}</div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </>
  );
};

export default Hero;

// Services Component
const Services = () => {
  const services = [
    {
      title: "Holder",
      subtitle: "Where crypto meets confidence",
      items: ["Mining App", "Telegram Airdrop", "Testnet Airdrops", "Success Rate"]
    },
    {
      title: "Flipper",
      subtitle: "Flip your way to crypto success",
      items: ["Minning apps", "Airdrop guide", "Low gas fee tricks", "Honeypot alert", "Telegram airdrop", "ICO/IDO calls", "Test net airdrops", "Meme coins calls", "Market analysis", "Success rate"]
    },
    {
      title: "Satoshi",
      subtitle: "Unlock elite crypto insights with satoshi",
      items: ["Mining apps", "Airdrop guide", "Honeypot alert", "Low gas fee tricks", "ICO/IDO calls", "Telegram airdrops", "Test net airdrops", "Meme coins call", "NFTs calls", "Retroactive airdrops", "Market analysis", "T.A mentorship", "Crypto and forex trading signals", "Success rate"]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#034D99] via-[#034D99] to-[#F5F5F5] rounded-[50px] p-8">
      <AnimatedSection direction="top">
        <h2 className="text-2xl font-bold text-white text-center mb-2">Our Services</h2>
        <p className="text-center font-bold mb-6 text-white">Trade with us</p>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {services.map((service, index) => (
          <AnimatedSection direction="bottom" key={index}>
            <ServiceCard title={service.title} subtitle={service.subtitle} items={service.items} />
          </AnimatedSection>
        ))}
      </div>

      <div className="flex justify-around space-x-4">
        <AnimatedSection direction="left">
          <button className="border-[3px] border-[#288232] bg-gradient-to-r from-[#001F3F] to-[#F5F5F5] flex w-[400px] py-[15px] px-0 justify-center items-center">
            Free Mode
          </button>
          <span className="flex items-center text-black justify-center mt-2">Can only check two projects per week</span>
        </AnimatedSection>

        <AnimatedSection direction="right">
          <button className="border-[3px] border-[#288232] bg-gradient-to-r from-[#001F3F] to-[#F5F5F5] flex w-[400px] py-[15px] px-0 justify-center items-center">
            Buy Gas Fee
          </button>
          <span className="flex items-center text-black justify-center">Never run out of gas fee. Deposit ahead and buy at the current market rate.</span>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Services;

// Analysis Component
const Analysis = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-8">
        <AnimatedSection direction="left">
          <div className="w-full sm:w-1/2 order-2 sm:order-2 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">
              <span className="text-[#034D99]">Project</span> Analysis & Articles
            </h1>
            <div className="text-white text-1xl p-4">
              <div className="flex gap-5">
                <li>Project Name: Blum</li>
                <Image
                  src="/assets/images/blum.png"
                  alt="Crypto Steeze Logo"
                  width={40}
                  height={40}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <li>Success rate: 80%</li>
            </div>
            <span className="font-bold">Instagram :</span>
            <span className="font-bold">Facebook :</span>
            <span className="font-bold">Twitter :</span>
            <div className="flex">
              <Image
                src="/assets/images/Group 21.png"
                alt="Crypto Steeze Logo"
                width={90}
                height={90}
                className="rounded-lg shadow-lg"
              />
              <h4 className="font-bold">Summary:</h4>
              <h3>This project has an 80% success rate and is a good one</h3>
            </div>
            <h3 className="font-bold mt-2">Note:</h3>
            <span>Come back for new developments from the project</span>
          </div>
        </AnimatedSection>

        <AnimatedSection direction="right">
          <div className="w-full sm:w-1/2 order-2 sm:order-1 flex items-center">
            <Image
              src="/assets/images/mobileBitcoin.png"
              alt="Crypto Steeze Logo"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Analysis;

// Analysis Writeup Component
const AnalysisWriteup = () => {
  return (
    <Container>
      <AnimatedSection direction="bottom">
        <div className="px-20">
          <h2 className="flex items-center justify-center font-bold text-2xl">Airdrop Guide</h2>
          <span className="flex items-center">Earn Free Blum Points: Key Steps</span>
          <div className="flex mr-10 items-center">
            <ul className="list-decimal">
              <li>Join the Blum Telegram group via https://t.me/blum/app?startapp=ref_jYmw9tYTvo</li>
              <li>Visit the mini-app every 8 hours to claim your accumulated Blum points</li>
              <li>Visit the mini-app daily to grow your streak and earn free Blum points with daily 7 drop game tickets</li>
              <li>Use your tickets to play the drop game (tips on playing the drop game: catch only flowers and avoid bombs)</li>
              <li>Complete community tasks like sharing content and inviting new members.</li>
            </ul>
          </div>
          <div className="gap-x-10">
            <div>
              <span className="font-bold"> Market Analysis</span>
              <p>Blum is here to Simplify Crypto Trading</p>
              <span>With Blum, you can access a wide range of tokens from centralized and decentralized platforms in one place. Enjoy:</span>
              <div>
                <ul>
                  <li>Easy derivatives trading</li>
                  <li>Futures trading</li>
                  <li>Seamless coin purchases</li>
                </ul>
              </div>
              <span className="font-bold text-1xl">Blum decentralized exchange offers:</span>
              <ul>
                <li className="text-1xl">Flexibility: Trade without limitations</li>
                <li className="text-1xl">Ease of use: Navigate with simplicity</li>
                <li className="text-1xl">Security: Control your funds with MPC wallet or connect your existing wallet</li>
              </ul>
              <span className="text-1xl">Trade anywhere, anytime with our mobile and Telegram mini apps.</span>
              <ul>
                <li>Gleb Kostarev (CEO & Co-founder)</li>
                <li>Vladimir Smerkis (Co-founder of Blum, also an ex-head of Binance CIS / Central Asia)</li>
              </ul>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </Container>
  );
};

export default AnalysisWriteup;

// Satoshi Component
const Satoshi = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-8">
        <AnimatedSection direction="left">
          <div className="w-full sm:w-1/2 order-2 sm:order-2 flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-4">
              <span className="text-[#034D99]">Project</span> Analysis & Articles
            </h1>
            <div className="text-white text-1xl">
              <div className="flex gap-5">
                <li>Project Name: Satoshi App</li>
                <Image
                  src="/assets/images/Satoshi.png"
                  alt="Crypto Steeze Logo"
                  width={40}
                  height={40}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <li>Handle Links: </li>
            </div>
            <span className="font-bold">Website: https://www.satoshiapp.xyz/</span>
            <span className="font-bold">Twitter: https://twitter