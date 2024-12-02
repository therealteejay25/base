import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import bulb from "../../assets/bulb.png";
import etherum from "../../assets/etherum.png";
import link from "../../assets/link.png";
import logo from "../../assets/Base_Network_Logo.svg";

const Aboutpage = () => {
  return (
    <div className="bg-plain-2 scroll">
      <nav className="bg-black/25 z-50 fixed top-0 left-0 w-full flex justify-between items-center backdrop-blur-lg shadow-lg py-2 px-4 lg:rounded-full lg:max-w-[70%] lg:ml-56 lg:mt-5 animate-fade-in">
        <Image src={logo} className="h-10" alt="Base Network Logo" />
        <div className="flex space-x-4 mx-5 text-light text-sm lg:text-base font-semibold">
          <Link href="/" className="hover:text-main transition">Home</Link>
          <Link href="/about" className="hover:text-main transition">About</Link>
        </div>
        <Link href='/nominate' className="bg-gradient-to-r from-main to-main/50 py-2 px-5 text-sm lg:text-[17px] font-medium text-light rounded-full">
          Nominate
        </Link>
      </nav>

      {/* Section Content */}
      <div className="pt-8 lg:pt-28 w-[90%] mx-auto">
        {[
          {
            title: "What is Base Wall of Fame?",
            text: "Base Hall of Fame is a community-based project that celebrates builders across the world doing great stuff on-chain. It cuts across every aspect, not just devs! Anyone building or bringing people on-chain is a Builder.",
            img: bulb,
          },
          {
            title: "Why Base Wall of Fame?",
            text: "Base Wall of Fame exists to recognize builders driving innovation on-chain. It celebrates contributions across all fields, inspiring more people to build and grow the Base ecosystem.",
            img: link,
            reverse: true,
          },
          {
            title: "Future of Base Wall of Fame",
            text: "The future of Base Wall of Fame aims to expand recognition globally, incorporating more builders and advanced features to highlight achievements and foster collaboration across the blockchain world.",
            img: etherum,
          },
        ].map(({ title, text, img, reverse }, index) => (
          <div
            key={index}
            className={`w-full lg:flex ${reverse ? "flex-row-reverse" : ""} lg:px-20 animate-fade-in`}
          >
            <Image src={img} className="h-40 w-44 mx-auto my-5" alt={title} />
            <div className="text-center lg:w-[40rem] lg:py-11 lg:text-left">
              <h3 className="text-main text-2xl font-semibold">{title}</h3>
              <p className="text-light lg:p-0 px-4">{text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Nomination Section */}
      <div className="h-[96] lg:h-96 m-3 mt-10 bgplain overflow-hidden rounded-lg bg-white z-30 mx-4 animate-fade-in">
        <div className="bg-black/25 h-full w-full flex flex-col justify-center items-center text-center">
          <h3 className="text-main font-semibold text-xl lg:pt-3 p-2">
            Get a chance to be on the Wall of Fame!!!
          </h3>
          <h2 className="text-light lg:text-[2.47rem] text-[1.4rem] font-semibold px-2">
            DO YOU KNOW ANY BUILDER, BUILDING OR DOING COOL STUFF ON-CHAIN?
          </h2>
          <p className="text-light/80 pb-2 lg:pb-3 px-2">
            Submit a nomination and they might just get lucky to be awarded with a place on the Wall of Fame.
          </p>
          <Link
            href="/nominate"
            className="bg-gradient-to-br from-main to-main/60 lg:px-16 py-3 px-6 text-lg font-semibold text-light rounded-full"
          >
            Submit a Nomination
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Aboutpage