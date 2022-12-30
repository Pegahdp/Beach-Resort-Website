import SelectCart from "./SelectCart";
import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import KeyWest from "../assets/keywest.jpg";

function Selects() {
  return (
    <div className="max-w-[1024px] mx-auto px-4 py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectCart bg={BoraBora} title="Bora Bora"/>
      <SelectCart bg={BoraBora2} title="Maldives"/>
      <SelectCart bg={Maldives} title="Cozumel"/>
       <SelectCart bg={Maldives2} title="Key West"/>
       <SelectCart bg={KeyWest} title="Bali"/>
       <SelectCart bg={BoraBora} title="Grande Antigua"/>
    </div>
  );
}

export default Selects;
