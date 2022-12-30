import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1024px] mx-auto px-4 ">
        <div className="sm:flex text-center justify-between items-center">
        <h1>BEACHES.</h1>
        <div className="flex justify-between w-full sm:max-w-[280px] my-6">
          <FaFacebook className="icon" />
          <FaTwitter className="icon" />
          <FaYoutube className="icon" />
          <FaPinterest className="icon" />
          <FaInstagram className="icon" />
        </div>
      </div>
      <div className='flex justify-between'>
          <ul className='lg:flex'>
            <li>About</li>
            <li>Partnerships</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className='text-left lg:flex'>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Footer;
