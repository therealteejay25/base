import Image from "next/image";
import Link from "next/link";
import logo from "../assets/Base_Network_Logo.svg";
import jesse from "../assets/Group 34.png";

// Sample image data - replace with proper imports or URLs
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import warp from '../assets/warpcast icon.png'

export default function Home() {
  const data = [
    {
      id: 1,
      name: "Wbbns",
      image: img1,
      warpcastLink: "https://warpcast.com/wbbns",
    },
    {
      id: 2,
      name: "Statuette",
      image: img2,
      warpcastLink: "https://warpcast.com/statuette",
    },
    {
      id: 3,
      name: "Kabir",
      image: img4,
      warpcastLink: "https://warpcast.com/kabir",
    },
    {
      id: 4,
      name: "Samuya Saxena",
      image: img3,
      warpcastLink: "https://warpcast.com/saxenasaheb",
    },
    {
      id: 5,
      name: "Toady Hawk",
      image: img6,
      warpcastLink: "https://warpcast.com/toadyhawk.eth",
    },
    {
      id: 6,
      name: "Kokocodes",
      image: img9,
      warpcastLink: "https://warpcast.com/kokocodes",
    },
    {
      id: 7,
      name: "IamCharis",
      image: img5,
      warpcastLink: "https://warpcast.com/iamcharis",
    },
    {
      id: 8,
      name: "Dami",
      image: img8,
      warpcastLink: "https://warpcast.com/sir-damilare",
    },
    {
      id: 9,
      name: "Naomi",
      image: img10,
      warpcastLink: "https://warpcast.com/afrochicks",
    },
    {
      id: 10,
      name: "Tony",
      image: img7,
      warpcastLink: "https://warpcast.com/to",
    },
    {
      id: 11,
      name: "Patty",
      image: img11,
      warpcastLink: "https://warpcast.com/patty",
    },
    {
      id: 12,
      name: "Yele",
      image: img13,
      warpcastLink: "https://warpcast.com/yele.eth",
    },
    {
      id: 13,
      name: "Bernard01",
      image: img12,
      warpcastLink: "https://warpcast.com/bernard0",
    },
  ];

  return (
    <div className="scroll min-h-screen">
      {/* Main Container */}
      <div className="bg flex flex-col justify-between min-h-screen w-full">
        {/* Navigation Bar */}
        <nav className="bg-black/25 z-50 fixed top-0 left-0 w-full flex justify-between items-center backdrop-blur-lg shadow-lg py-3 px-6 lg:rounded-full lg:max-w-[70%] lg:ml-56 lg:mt-5">
          <Image src={logo} alt="Base Network Logo" width={40} height={40} />
          <div className="flex space-x-6 mx-5 text-light text-sm lg:text-base font-semibold">
            <Link href="/" className="hover:text-main transition">
              Home
            </Link>
            <Link href="/about" className="hover:text-main transition">
              About
            </Link>
          </div>
          <Link
            href="/nominate"
            className="bg-gradient-to-r from-main to-main/50 py-2 px-5 text-sm lg:text-base font-medium text-light rounded-full"
          >
            Nominate
          </Link>
        </nav>

        {/* Hero Section */}
        <section className="text-light text-center flex flex-col items-center justify-center flex-grow px-6 lg:px-32 py-10">
          <h1 className="font-semibold text-2xl p-5 text-main">
            BASE WALL OF FAME!!!
          </h1>
          <h2 className="text-2xl w-[22rem] lg:w-[33rem] lg:text-4xl font-semibold">
            Celebrate the builders creating magic on base since day one.
          </h2>
          <p className="text-sm lg:text-md leading-6 max-w-screen-md mt-4">
            Discover the visionary builders behind Base, the Layer 2 blockchain
            designed for scalability and accessibility. From decentralized
            finance pioneers to creative NFT developers, explore the projects
            and minds shaping the future of Web3. Connect, collaborate, and
            innovate with the people bringing the Base vision to life.
          </p>
          <button className="bg-gradient-to-r w-72 lg:w-96 from-main to-main/50 py-3 px-8 text-sm lg:text-lg font-semibold text-light rounded-full mt-6">
            See More
          </button>
        </section>
      </div>

      {/* Secondary Background Section */}
      <div className="bg-plain flex items-center justify-center h-screen w-full animate-fade-in">
        <div>
          <h3 className="text-center text-3xl text-light font-semibold py-5">
            Meet the 001
          </h3>
          <div className="lg:flex justify-center items-center mx-10">
            <div>
              <Link href='https://warpcast.com/jessepollak'>
              <Image
                className="lg:h-96 lg:w-96 h-60 w-60 mx-auto"
                alt="001 Image"
                src={jesse}
              />
              </Link>
            </div>
            <div className="lg:w-[40rem]">
              <h2 className="text-light font-semibold text-2xl text-center">
                Jesse
              </h2>
              <p className="text-light">
                Jesse is the CEO and founder of Coinbase and the driving force
                behind the creation of Base, Coinbase Layer 2 blockchain
                solution. Base is designed to make decentralized app development
                more accessible and scalable, with lower transaction costs.
                Armstrong’s leadership in the blockchain industry focuses on
                fostering innovation and building an open financial system to
                empower economic freedom globally.
              </p>
              
            </div>
          </div>
        </div>
      </div>

      {/* Card Slider Section */}
      <section className="p-8 bg-gray-900 text-light">
        <h1 className="text-center text-3xl font-bold mb-6">
          Meet the Builders
        </h1>
        <div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 mx-5 sm:mx-10 lg:mx-20">
  {data.map((item) => (
    <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-lg">
      <Image
        src={item.image}
        alt={item.name}
        className="w-full h-48 sm:h-60 lg:h-72 object-cover"
      />
      <div className="absolute inset-0 bg-main/30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <h2 className="text-2xl font-semibold text-center">{item.name}</h2>
        <Link
          href={item.warpcastLink}
          className="mt-2 text-light py-2 px-4 rounded-full"
        >
          <Image alt="warp-icon" src={warp} className="h-10 w-10" />
        </Link>
      </div>
    </div>
  ))}
</div>

        </div>
      </section>
    </div>
  );
}
