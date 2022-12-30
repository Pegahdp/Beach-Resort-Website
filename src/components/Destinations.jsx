import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import KeyWest from "../assets/keywest.jpg";

function Destinations() {
  return (
    <div className="max-w-[1024px] mx-auto py-16 px-4">
      <h2 className="uppercase"> All-Inclusive Resorts</h2>
      <p className="py-4">On the Caribbean's Best Beaches</p>
      <div className="grid grid-rows-none md:grid-cols-5 py-4 
      gap-2 md:gap-4">
        <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2 hover-transition" src={BoraBora} alt="/" />
        <img className="w-full h-full object-cover hover-transition" src={BoraBora2} alt="/" />
        <img className="w-full h-full object-cover hover-transition" src={Maldives} alt="/" />
        <img className="w-full h-full object-cover hover-transition" src={Maldives2} alt="/" />
        <img className="w-full h-full object-cover hover-transition" src={KeyWest} alt="/" />
      </div>
    </div>
  );
}

export default Destinations;
