import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
// import RightBanner from './RightBanner';
const Intro = () => {
  return (
    <section
      className="w-full pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >

     <LeftBanner/>
     <RightBanner/>
    </section>
  );
}

export default Intro