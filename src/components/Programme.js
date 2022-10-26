import React from "react";
import progImg from "../assets/images/progImg.png";
import weddingProg from "../assets/wedding-program.pdf"
const progs = [
  {
    title: "Engagement | 7am",
    address:
      "Bible Guest House Ibadan, Plot 7A, Trinity Avenue, Educational Estate, Samonda, Ibadan",
    directionURL:
      "https://www.google.com/maps/place/Bible+Guest+House+Ibadan/@7.4320281,3.9046023,15z/data=!4m8!3m7!1s0x0:0x96c1fffa70ec9474!5m2!4m1!1i2!8m2!3d7.4320297!4d3.9047248",
  },
  {
    title: "Church Service | 11am",
    address:
      "Christ Rescue Interdenominational Ministry, A.k.a Ibudo Isure, Along Ori Oke Aanu, Isokun Area, off Arulogun /Igbo-Oloyin Rd; Ojoo, Ibadan.",
    directionURL:
      "https://www.google.com/maps/place/Christ+Rescues+Interdenominational+Minist/@7.4854202,3.9188621,17z/data=!3m1!4b1!4m5!3m4!1s0x1039ed15b0f24bc5:0xa1c004c6f6098f8f!8m2!3d7.485415!4d3.921051",
  },
  {
    title: "Reception follows immediately at",
    address:
      "Bible Guest House Ibadan, Plot 7A, Trinity Avenue, Educational Estate, Samonda, Ibadan",
    directionURL:
      "https://www.google.com/maps/place/Bible+Guest+House+Ibadan/@7.4320281,3.9046023,15z/data=!4m8!3m7!1s0x0:0x96c1fffa70ec9474!5m2!4m1!1i2!8m2!3d7.4320297!4d3.9047248",
      last:true
  },
];

const ProgComp = ({ title, address, directionURL, last, index }) => {
    const delay = index *100
  return (
    <div className="flex gap-9" data-aos-delay={delay} data-aos="fade-up">
      <div className="flex flex-col items-center ">
        <div className="w-4 h-4 border border-[#cb872a]  bg-[#fef1de] rounded-full" />
        <div className="w-[1px] h-full bg-[#cb872a]" />
      </div>
      <div className={`${!last && "pb-16"} flex flex-col gap-3`}>
        <p className="text-3xl text-black mt-[-10px] font-Montaga">{title}</p>
        <p className="text-base xl:text-[20px] leading-7 text-gray-500 font-Montaga">
          {address}
        </p>
        <a
          href={directionURL}
          target="_blank"
          rel="noreferrer"
          className=" px-6 py-3 font-Montaga bg-[#CB872A] text-white self-start rounded-full"
        >
          Get direction
        </a>
      </div>
    </div>
  );
};

const Programme = () => {
  return (
    <section className="bg-[#FEF1DE] mt-[15vh] " id="programme">
      <div className="container mx-auto  p-4 md:p-10 xl:p-16">
        <div className="flex flex-col-reverse lg:flex-row gap-16">
          <div className="lg:w-[45%]">
            <p className="text-5xl font-serifbold text-[#CB872A] font-BonVivant pb-9">
              Programme
            </p>
            {progs.map((prog, index) => {
              return (
                <ProgComp
                  title={prog.title}
                  address={prog.address}
                  directionURL={prog.directionURL}
                  last={prog.last}
                  index={index}
                />
              );
            })}
          </div>
          <div className=" relative  lg:w-[50%] grid place-items-center h-[270px] md:h-[400px] overflow-hidden lg:h-auto bg-[url('./assets/images/progImg.png')] lg:bg-none bg-no-repeat bg-cover bg-[0%_10%]">
            <img src={progImg} alt="" className="hidden lg:block" />
          </div>
        </div>

<a href={weddingProg} download className="inline-flex items-center px-6 py-3 rounded-full font-Montaga bg-white gap-2 mt-16">
<span class="material-symbols-outlined">
download
</span>
<p className="text-xl leading-7 text-yellow-600">Download Wedding Programme</p>
</a>
      </div>
    </section>
  );
};

export default Programme;
