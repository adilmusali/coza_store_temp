import React from "react";
import { BsSearch, BsFillHeartFill } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed w-full z-50 top-0">
      <div className="container">
        <div className="flex justify-between py-[20px] items-center">
          <div className="flex gap-[80px] items-center">
            <h1 className="text-[23px]"><span className="font-bold">COZA</span> STORE</h1>
            <ul className="flex gap-[30px]">
              <li>
                <a href="#" className="text-violet-500">Home</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-[30px] text-[20px]">
            <div>
              <BsSearch />
            </div>
            <div>
              <FaShoppingCart />
            </div>
            <div>
              <BsFillHeartFill />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
