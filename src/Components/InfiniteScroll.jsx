import React from 'react';

const InfiniteScroll = () => {
  return (
    <div className="relative overflow-hidden w-full bg-gray-50 py-2 border-t border-b border-gray-100 z-10">
      <div className="animate-scroll flex gap-20 items-center">
        {/* First set of logos */}
        <img src="./images/infund.png" alt="Partner 1" className="w-[131px] inline-block object-contain" />
        <img src="./images/together2.png" alt="Partner 2" className="w-[145px] inline-block object-contain self-end" />
        <img src="./images/Avamore.png" alt="Partner 3" className="w-[131px] inline-block object-contain" />
        <img src="./images/infund.png" alt="Partner 4" className="w-[131px] inline-block object-contain" />
        <img src="./images/together2.png" alt="Partner 5" className="w-[145px] inline-block object-contain self-end" />
        <img src="./images/Avamore.png" alt="Partner 6" className="w-[131px] inline-block object-contain" />

        {/* Duplicate set for seamless scroll */}
        <img src="./images/infund.png" alt="Partner 7" className="w-[131px] inline-block object-contain" />
        <img src="./images/together2.png" alt="Partner 8" className="w-[145px] inline-block object-contain self-end" />
        <img src="./images/Avamore.png" alt="Partner 9" className="w-[131px] inline-block object-contain" />
        <img src="./images/infund.png" alt="Partner 10" className="w-[131px] inline-block object-contain" />
        <img src="./images/together2.png" alt="Partner 11" className="w-[145px] inline-block object-contain self-end" />
        <img src="./images/Avamore.png" alt="Partner 12" className="w-[131px] inline-block object-contain" />
      </div>
    </div>
  );
};

export default InfiniteScroll;