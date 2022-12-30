import BeachVid from "../assets/beachVid.mp4";
import { AiOutlineSearch } from 'react-icons/ai';

function Hero() {
  return (
    <div className="w-full h-screen relative ">
      <video
        className="h-full w-full object-cover"
        src={BeachVid}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-full absolute top-0 left-0 bg-gray-900/30"></div>
      <div className="absolute top-0 h-full w-full flex flex-col justify-center text-center text-white p-4">
      <h1>First Class Travel</h1>
        <h2 className='py-4'>Top 1% Locations Worldwide</h2>
        <form className="border flex justify-between mx-auto w-full items-center max-w-[700px] p-1 rounded-md text-black bg-gray-100/90">
          <div>
            <input className="bg-transparent w-[300px] sm:w-[400px] focus:outline-none" type="text" placeholder="Search destination" />
          </div>
          <div>
            <button><AiOutlineSearch size={20} /></button>
          </div>
          </form>
      </div>
    </div>
  );
}

export default Hero;
