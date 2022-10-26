import React from 'react'
import meet from "../assets/images/meet.png"
import zoom from "../assets/images/zoom.png"
const Live = () => {
  return (
    <section className="container mx-auto md:py-32 lg:py-20 xl:py-40 p-4">

        <p className="text-4xl leading-[130%] text-center mx-auto font-Montaga lg:w-[70%]" >We will love you to  share in our joy on this either in person or virtually, distance is not a barrier again kindly use the link below to join us live </p>
        <div className="mx-auto flex flex-col md:flex-row gap-6 justify-center mt-6">
            <a href="https://meet.google.com/rzy-agrj-qve" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center  items-center gap-3 rounded-full px-6 py-3 bg-[#FEF1DE]">
                <img src={meet} alt="" />
                <p className="text-xl text-center font-Montaga">Google Meet</p>
                
            </a>
            <a href="https://us04web.zoom.us/j/74584774831?pwd=PIH4rCnzFPAXleJRmgcGP9YToiYkKo.1" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center  items-center gap-3 rounded-full px-6 py-3 bg-[#FEF1DE]">
                <img src={zoom} alt="" />
                <p className="text-xl text-center font-Montaga">Join via Zoom</p>
                
            </a>
        </div>
    </section>
  )
}

export default Live