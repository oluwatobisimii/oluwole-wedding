import React from "react";
import heroImg from "../assets/images/heroImg.png";

const Hero = () => {
  return (
    <div className="relative md:h-[88vh] overflow-hidden">
      <section className="container mx-auto items-center px-4 gap-6 md:px-10 text-center md:gap-10 lg:gap-4  flex flex-col h-full ">
        <p className="md:text-2xl lg:text-lg font-Montaga pt-20 tracking-widest text-gray-700 uppercase lg:pt-0">
          saturday, <br className="lg:hidden"/> november 5th, 2022
        </p>
        <p className=" text-6xl md:text-9xl font-serifbold leading-[105%] text-center text-yellow-600 font-BonVivant">
          Jesutofunmi
          <br />& Oluwole
        </p>
        <img src={heroImg} alt="" className="scale-150 md:scale-100 lg:w-[50vw] md:mt-auto" />
      </section>
      <div
        className="absolute bottom-0 h-[15vh] md:h-[25vh] lg:h-[25vh] w-full z-[-5] left-0"
        style={{
          background:
            "linear-gradient(90.11deg, #00442B 15.38%, #01774C 47.57%, #01623E 81.01%)",
        }}
      />
    </div>
  );
};

export default Hero;
