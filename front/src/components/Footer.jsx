import React from "react";
import { FaFacebookF, FaInstagram, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#222222]">
      <div className="container">
        <div className="flex justify-between py-[100px]">
          <div className="flex flex-col gap-[20px]">
            <h4 className="font-bold text-white uppercase">Categories</h4>
            <ul className="flex flex-col gap-[10px] text-[14px] text-gray-400">
              <li>
                <a href="#">Women</a>
              </li>
              <li>
                <a href="#">Men</a>
              </li>
              <li>
                <a href="#">Shoes</a>
              </li>
              <li>
                <a href="#">Watches</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[20px]">
            <h4 className="font-bold text-white uppercase">Help</h4>
            <ul className="flex flex-col gap-[10px] text-[14px] text-gray-400">
              <li>
                <a href="#">Track Order</a>
              </li>
              <li>
                <a href="#">Returns</a>
              </li>
              <li>
                <a href="#">Shipping</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-[30px]">
            <h4 className="font-bold text-white uppercase">Get in touch</h4>
            <p className="text-[14px] text-gray-400 w-[270px]">
              Any questions? Let us know in store at 8th floor, 379 Hudson St,
              New York, NY 10018 or call us on (+1) 96 716 6879
            </p>
            <div className="flex gap-3 text-gray-400">
              <FaFacebookF />
              <FaInstagram />
              <FaPinterest />
            </div>
          </div>
          <div className="flex flex-col gap-[30px]">
            <h4 className="font-bold text-white uppercase">NEWSLETTER</h4>
            <form action="" className="flex flex-col gap-[30px]">
              <input
                placeholder="email@example.com"
                className="peer h-[40px]  w-[300px] border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-violet-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              />
              <div>
                <button className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-3 px-[50px] transition duration-300 rounded-full">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
