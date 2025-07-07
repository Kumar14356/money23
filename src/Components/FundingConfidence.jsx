import React from "react";

const FundingConfidence = () => {
  return (
    <section className="bg-[#F0FCFF] py-16 font-Inter overflow-x-hidden">
      <div className="container mx-auto  px-4 lg:px-32 flex flex-col lg:flex-row items-center justify-between">
        
      
        <div className="max-w-lg text-center lg:text-left mb-10 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold font-Inter text-[#102B52]">
            Feel confident you're getting <br /> 
            the best deal – every time.
          </h2>
          <p className="mt-4 text-[#000000] text-base lg:text-lg">
            Our smart-search software scans the entire market to match you with the best available rates.  
            And unlike many others, we never charge a broker fee.
          </p>
          <p className="mt-2 text-[#000000] text-base lg:text-lg">
            Let our technology do the work. You'll get tailored results instantly, with no bias and no hidden costs.
          </p>
          <button className="mt-6 bg-[#2B65B6] text-white px-6 py-2 rounded-full font-[300] hover:bg-blue-700 transition">
            Find My Funding
          </button>
        </div>

   
        <div className="relative w-96 h-96 min-w-[400px]">
          
          <div className="w-full max-w-[400px] lg:px-0 px-5"> {/* Adjust max width as needed */}
  <img src="/images/Group 299.png" alt="" className="w-full h-auto" />
</div>

        </div>

      </div>
    </section>
  );
};

export default FundingConfidence;



