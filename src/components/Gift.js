import React from "react";

const Gift = () => {
  return (
    <section
      className="container mx-auto md:py-32 lg:py-20 xl:py-40 p-4 flex flex-col items-center"
      id="gifts"
    >
      <p className="text-2xl md:text-4xl leading-[130%] text-center mx-auto font-Montaga lg:w-[70%]">
        Your presence at our wedding is enough present but if you would love to
        support us still,{" "}
        <span className="text-[#CB872A]">
          1000198736 (VFD Microfinance Bank) Jesutofunmi Dorcas Osho
        </span>{" "}
      </p>
      <a
        href="https://iludio.com/registry/jounion/ "
        target="_blank"
        rel="noopener noreferrer"
        className="block  px-10 py-3 font-Montaga bg-[#CB872A] text-white text-xl rounded-full mt-10 "
      >
        {" "}
        Visit Registry
      </a>
    </section>
  );
};

export default Gift;
