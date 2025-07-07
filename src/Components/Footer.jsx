import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#B0C4DE] py-12 font-Inter px-6 text-center overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        
          <div className="text-start">
            <h3 className="font-semibold text-black mb-6 text-3xl">Explore</h3>
            <ul className="space-y-2">
            <li><a href="#" className="text-cyan-500 hover:text-purple-600 transition-colors">Borowers</a></li>
              <li><a href="#" className="text-black hover:text-purple-600 transition-colors">For Brokers</a></li>
              <li><a href="#" className="text-black hover:text-purple-600 transition-colors">Our Features</a></li>
              <li><a href="#" className="text-black hover:text-purple-600 transition-colors">Our Story</a></li>
            </ul>
          </div>

      
          <div className="text-start">
            <h3 className="font-semibold text-black mb-6 text-3xl">Apply Now</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-purple-600 transition-colors">Apply For Finance</a></li>
              <li><a href="#" className="text-black hover:text-purple-600 transition-colors">Open a Free Broker Account</a></li>
              <li><a href="#" className="text-black hover:text-purple-600 transition-colors">Become a Lender Partner</a></li>
            </ul>
          </div>

      
          <div className="text-start">
            <h3 className="font-semibold text-black mb-6 text-3xl">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-purple-600 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-black hover:text-purple-600 transition-colors">Our Guides</a></li>
              <li><a href="#" className="text-black hover:text-purple-600 transition-colors">Terms of Business</a></li>
              <li><a href="#" className="text-black hover:text-purple-600 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-black hover:text-purple-600 transition-colors">Complaints</a></li>
            </ul>
          </div>

     
          <div>
            <h3 className="font-semibold text-black mb-6 text-3xl">Contact</h3>
            <div className=" text-black">
              <p className='font-bold'>Trading & Registere address:</p>
              <p>Unit 1,17 Verney House</p>
              <p>1B Hollywood Road, London</p>
              <p>SW10 9HS</p>
              <p className='font-bold'>Company Registeration No:</p>
              <p>13609592</p>
              <p className="mt-3 font-bold">Telephone: </p>
              <p>+0800 7723 180</p>
              <p className='font-bold'>Email:</p>
              <p className="mt-3">info@providefinance.com</p>
            </div>
            <div className="flex justify-center space-x-4 mb-6">
            <a href="#" className="text-black hover:text-purple-600 transition-colors">
            Insta
            </a>
            <a href="#" className="text-black hover:text-purple-600 transition-colors">
           Facebook
            </a>
            <a href="#" className="text-black hover:text-purple-600 transition-colors">
            Twitter
            </a>
          </div>
          </div>
        </div>
                
          <div className="text-center text-sm text-black mt-10">
            <p>
              Sample Financial Ltd (FRN 123456) is an Appointed Representative of Cyber-Strong Finance Group Ltd which is authorised and regulated by the Financial Conduct Authority (FRN 456789). Sample Strong Finance Group Ltd is a credit broker and not a lender. Finance is provided through a panel of lenders. This site shows example APR and acceptance rates. Actual rates may vary and are subject to your financial circumstances.
            </p>
            <p className="mt-2 font-semibold">
              YOUR INVESTMENT MAY BE UNSUCCESSFUL SO YOU MUST NOT RELY ON ANY STATEMENTS AS A SUBSTITUTE OR WAY OTHER PAST BUSINESS AIMS
            </p>
          </div>
        </div>
    </footer>
  );
};

export default Footer;