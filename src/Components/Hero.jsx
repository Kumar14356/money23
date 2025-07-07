const Hero = () => {
  return (
    <section className='relative w-full font-Inter overflow-hidden min-h-auto'>
      <div className="w-full h-[55vh] md:h-[50vh] lg:h-screen bg-[url('/images/Baloonbg.png')] bg-no-repeat
                     bg-[length:200%_auto] bg-[center_100px]
                     sm:bg-[length:150%_auto] sm:bg-[center_110px]
                     md:bg-[length:130%_auto] md:bg-[center_180px]
                     lg:bg-[length:115%_auto] lg:bg-[center_120px]
                     xl:bg-[length:115%_auto] xl:bg-[center_120px]">
        
        <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent sm:from-white/20 lg:from-white/30"></div>
        
        <div className="container mx-auto px-4 sm:px-8 lg:px-22 py-10 flex flex-col-reverse lg:flex-row items-center relative z-10">
          <div className="w-full lg:w-[70%] text-center lg:text-left mt-5">
            <div className="inline-block bg-[#F97171] px-4 py-1 rounded-md mb-4">
              <p className="text-white text-sm">Latest 2025 Rates</p>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-[650] font-Inter lg:leading-[65px] text-[#102B52]">
              Smarter business <br /> and property finance.
            </h1>

            <p className="text-base sm:text-lg lg:text-2xl text-[#102B52] mt-4 mb-6">
              Compare 100s of lenders in minutes with MoneyPilot,<br className="hidden sm:block" /> your co-pilot from take-off to funding.
            </p>

            <div className="flex outline-none flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8 sm:mt-12 lg:mt-20">
              <button className="bg-[#2B65B6] cursor-pointer text-white px-6 sm:px-8 lg:px-10 py-3 rounded-full text-sm sm:text-base">
                Find My Funding
              </button>
              <button className="text-[#2B65B6] cursor-pointer px-4 sm:px-6 py-3 font-[500] rounded-full text-sm sm:text-base">
                How It Works
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;  