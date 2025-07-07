import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      icon: "/images/browser_plus.png",
      title: "Submit Inquiry",
      desc: "Complete a fast but in-depth overview of your finance requirements to allow our powerful matching engine to source the right lenders for you.",
    },
    {
      icon: "/images/comment_4.png",
      title: "Connect",
      desc: "Engage directly with lenders in real-time, with our friendly advisors always on hand to guide you through every step of the funding journey.",
    },
    {
      icon: "/images/trolley_plus.png",
      title: "Apply",
      desc: "Track your enquiry in real-time and seamlessly move to application—all in one place—getting you to your funds faster and with less hassle.",
    },
  ];

  return (
<section className="bg-[#F0FCFF] py-16 overflow-x-hidden font-Inter">
  <div className="mx-auto px-4 lg:px-32">
    <h2 className="text-3xl lg:text-4xl font-bold text-[#102B52] mb-12 text-center">
      How Does It Work?
    </h2>

    <div className="w-full flex justify-center">
  <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12 max-w-5xl">
    {steps.map((step, index) => (
      <div
        key={index}
        className="w-80 flex flex-col items-center text-center p-4 rounded-lg"
      >
        <img
          src={step.icon}
          alt={step.title}
          className="mb-4 w-20 h-20 object-contain"
        />
        <h3 className="text-[30px] font-bold text-[#102B52] mb-2 leading-tight">
          {step.title}
        </h3>
        <p className="text-[#000000] text-md mt-2">{step.desc}</p>
      </div>
    ))}
  </div>
</div>


  </div>  
</section>

  );
};

export default HowItWorks;
