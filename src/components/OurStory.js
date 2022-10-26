import React, { useRef, useEffect } from "react";
import ourStory from "../assets/images/ourStory.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const OurStory = () => {
  useEffect(() => {
    {
      const text = textRef.current;
      const imageContainer = imageContainerRef.current;

      gsap.from(text, {
        xPercent: -70,
        duration: 8,
        scrollTrigger: {
          scrub: 1,
          //   markers:true,
          trigger: imageContainer,
          start: "top 100%",
          end: "end 0%",
        },
      });
    }

    return () => {};
  }, []);

  const textRef = useRef(null);
  const imageContainerRef = useRef(null);

  return (
    <section
      className="w-full overflow-hidden mt-10 relative p-4 md:p-10"
      ref={imageContainerRef}
      id="our-story"
    >
      <p
        className="text-[178px] font-BonVivant whitespace-nowrap font-serifbold text-center text-gray-100 uppercase"
        ref={textRef}
      >
        how we met
      </p>
      <div className="container mx-auto font-Montaga">
        <div className="flex flex-col lg:flex-row justify-center gap-10 md:gap-16 lg:gap-18 xl:gap-8">
          <div
            className="lg:w-[40%] xl:w-[35%]"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src={ourStory} alt="" />
          </div>
          <div
            className="lg:w-[40%] xl:w- space-y-8 ="
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <p className="text-5xl text-green-600 ">Our Story</p>
            <p className="text-lg xl:text-xl leading-relaxed text-gray-900">
              It all started from a casual introduction by a mutual friend
              during NYSC. We got talking and spoke more about career, academics
              and she helped with a financial model I was trying to build for a
              friend. Afterwards, we served in two committees in NCCF were we
              had opportunity to interact often. Fast forward we became close
              friends and got fond of each other and along the line we decided
              to journey together forever. <br />
              <br />
              Over the years, we have learnt sacrifice, forgiveness, openness
              and many other lessons through which by God's grace we would
              utilize on this journey of forever.
              <br />
              <br />
              The grace of God has been a great factor in our journey so far,
              and we are assured that He who began the good work will see us
              through till the end.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
