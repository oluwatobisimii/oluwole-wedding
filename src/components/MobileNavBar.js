import React from "react";
import logo from "../assets/images/logo.svg";
import { HiMenu, HiX } from "react-icons/hi";
// import { Link } from "react-router-dom";

const MobileNavBar = () => {
  const [nav, setNav] = React.useState(false);
  const toggleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="flex justify-between  p-4 py-6 sticky top-0 z-[99999] bg-white lg:hidden items-center w-screen h-[12vh] overflow-hidden">
        <div />
        <img src={logo} alt="" className="pt-4 " />
        {nav ? <HiX
          className="text-2xl self-end"
          onClick={() => {
            toggleNav();
          }}
        /> : <HiMenu
          className="text-xl"
          onClick={() => {
            toggleNav();
          }}
        />}

      </nav>

      {nav && <div className="fixed top-[12vh] z-[100000] h-[70vh] bg-white flex flex-col w-full text-2xl p-4 md:p-10 py-10  opacity-100 backdrop-blur-md font-Montaga uppercase gap-10 ">

        <a href="#programme" >Itinerary</a>
        <a href="#our-story" >our story</a>
        <a href="#rsvp" >RSVP</a>
        <a href="#gallery" >Gallery</a>
        <a href="#gifts" >GIFTS</a>
      </div>}
    </>
  );
};

export default MobileNavBar;
