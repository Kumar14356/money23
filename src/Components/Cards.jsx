import React from 'react';

const Cards = () => {
  return (
    <div className="mx-auto py-16 px-4 flex flex-col flex-wrap lg:flex-row gap-6 justify-center font-Inter overflow-x-hidden">
      
      <div className="flex justify-center">
        <div className="bg-[#F3F3F3] h-auto rounded-lg shadow-sm flex flex-col w-[320px] max-w-sm p-2">
          <div className="p-3 flex flex-col flex-grow">
            <span
              className="text-xs font-medium px-2 py-1 rounded mb-2 inline-block w-fit"
              style={{
                backgroundColor: "#FFECE5",
                color: "#F97171",
              }}
            >
              Match in Seconds
            </span>
            <h2 className="text-2xl font-bold text-[#102B52] mb-2">
              Speed
            </h2>
            <p className="text-[#000000] text-sm mb-4 leading-relaxed flex-grow">
              Instantly match with specialist lenders that are pre-qualified and ready to fund your plans.
            </p>
            <a
              href="#"
              className="text-sm font-semibold mb-12 cursor-pointer"
              style={{ color: "#F97171" }}
            >
              How are we so fast
            </a>
          </div>
          <div
            className="w-full relative flex justify-center items-end p-4 rounded-[20px]"
            style={{ backgroundColor: "#F97171", height: '150px' }}
          >
            <img
              src="/images/illustration1.png"
              alt="Speed"
              className="relative"
              style={{ maxHeight: 'auto', top: '25px' }}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="bg-[#F3F3F3] h-auto rounded-lg shadow-sm flex flex-col w-[320px] max-w-sm p-2">
          <div className="p-3 flex flex-col flex-grow">
            <span
              className="text-xs font-medium px-2 py-1 rounded mb-2 inline-block w-fit"
              style={{
                backgroundColor: "#E6EEFF",
                color: "#2B65B6",
              }}
            >
              Full Range of UK Lenders
            </span>
            <h2 className="text-2xl font-bold text-[#102B52] mb-2">
              Access
            </h2>
            <p className="text-[#000000] text-sm mb-4 leading-relaxed flex-grow">
              Our system gives you access to thousands of products from over 200 lenders, ensuring you the best-value finance solution.
            </p>
            <a
              href="#"
              className="text-sm font-semibold mb-12 cursor-pointer"
              style={{ color: "#2B65B6" }}
            >
              See our lenders
            </a>
          </div>
          <div
            className="w-full relative flex justify-center items-end p-4 rounded-[20px]"
            style={{ backgroundColor: "#144BA7", height: '150px' }}
          >
            <img
              src="/images/cardIllust2.png"
              alt="Access"
              className="relative"
              style={{ maxHeight: 'auto', top: '25px' }}
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="bg-[#F3F3F3] h-auto rounded-lg shadow-sm flex flex-col w-[320px] max-w-sm p-2">
          <div className="p-3 flex flex-col flex-grow">
            <span
              className="text-xs font-medium px-2 py-1 rounded mb-2 inline-block w-fit"
              style={{
                backgroundColor: "#E8F4F1",
                color: "#00A886",
              }}
            >
              Live Chat Support
            </span>
            <h2 className="text-2xl font-bold text-[#102B52] mb-2">
              Support
            </h2>
            <p className="text-[#000000] text-sm mb-4 leading-relaxed flex-grow">
              Monitor your enquiry in real-time, while receiving specialist support from our expert team of advisors.
            </p>
            <a
              href="#"
              className="text-sm font-semibold mb-12 cursor-pointer"
              style={{ color: "#00A886" }}
            >
              Speak to our team 
            </a>
          </div>
          <div
            className="w-full relative flex justify-center items-end p-4 rounded-[20px]"
            style={{ backgroundColor: "#158C8C", height: '150px' }}
          >
            <img
              src="/images/cardIllust3.png"
              alt="Support"
              className="relative"
              style={{ maxHeight: 'auto', top: '25px' }}
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Cards;