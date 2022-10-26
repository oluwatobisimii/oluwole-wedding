import React from "react";
import logo from "../assets/images/logo.svg";



const NavBar = () => {
  return (
    <div className="hidden lg:block  top-0 z-20 py-6 bg-white">
      <section className="container mx-auto flex space-x-20 justify-center  items-center font-Montaga uppercase tracking-widest h-[12vh] ">
        
        <a  href="#programme">Itinerary</a>
        <a  href="#our-story">our story</a>
       
        <img src={logo} alt="" />
        
        <a href="#rsvp">RSVP</a>
        <a href="#gallery" >Gallery</a>
        <a href="#gifts">GIFTS</a>
        
      </section>
    </div>
  );
};

export default NavBar;
