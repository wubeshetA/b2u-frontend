import React from 'react';
import { hero } from "../../assets/index";

const Banner = () => {
  return (
    <section

      className="flex flex-col gap-10 xl:gap-0 lgl:flex-row items-center border-b-[1px] font-titleFont border-b-black"
    >


    <section
      className="relative bg-no-repeat bg-center h-screen w-screen flex items-center justify-center"
      style={{ backgroundImage: `url(${hero})`, backgroundColor: 'rgba(0, 0, 0, 0.5)', backgroundSize: 'cover' }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <h1 className="text-6xl mt-60 text-white font-bold text-center max-w-3xl font-titleFont m-0 relative z-20">
        Talent is equally distributed, opportunity is not!
      </h1>
    </section>
    </section>
  );
};

export default Banner;