import React from "react";

const PropertyBusinessFinance = () => {
  return (
    <section className="bg-[#fff] py-16 font-Inter overflow-x-hidden">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-[#102B52] mb-10">
          Property &amp; Business Finance <br /> – All in One Place
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
          
       
          <div className="bg-[#F3F3F3] hover:bg-[#102C52] font-Inter text-start transition cursor-pointer hover:text-[#FFFFFF] rounded-lg shadow-sm p-6 max-w-sm text-[#102B52]">
            <h3 className="text-lg font-bold  mb-4">Property Finance</h3>
            <p className="text-sm  text-left mb-4">
              We specialise in Property Finance including:
            </p>
            <ul className="text-sm  text-left list-disc ml-5 mb-6">
              <li>Commercial Mortgages</li>
              <li>Property Development Finance</li>
              <li>Portfolio Finance</li>
              <li>Bridging Loans</li>
              <li>and more...</li>
            </ul>
            <button className="bg-[#2B65B6] text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
              Search Property
            </button>
          </div>

       
          <div className="bg-[#F3F3F3] transition text-start cursor-pointer hover:bg-[#102C52] hover:text-[#FFFFFF] text-[#102C52] rounded-lg shadow-sm p-6 max-w-sm ">
            <h3 className="text-lg font-bold mb-4">Business Finance</h3>
            <p className="text-sm  text-left mb-4">
              We specialise in Business Finance including:
            </p>
            <ul className="text-sm  text-left list-disc ml-5 mb-6">
              <li>Business Credit Cards</li>
              <li>Invoice Finance</li>
              <li>Asset Finance</li>
              <li>Trade Finance</li>
              <li>and more...</li>
            </ul>
            <button className="bg-[#F7A928] px-6 py-2 text-white rounded-full font-semibold transition">
              Search Business
            </button>
          </div>  

        </div>
      </div>
    </section>
  );
};

export default PropertyBusinessFinance;
