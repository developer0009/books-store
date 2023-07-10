import React from "react";
import Wrapper from "./Wrapper";
import { BiAddToQueue } from "react-icons/bi";

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="w-full h-[50px] md:h-[80px] bg-white z-20 sticky top-0  flex justify-center items-center">
      <Wrapper className="flex items-center justify-between">
        <Link to="/" className="font-bold md:text-xl">
          <span>BOOK STORE</span>
        </Link>
        <Link
          to={"/add"}
          className="w-[5rem] h-[2rem] sm:w-[5rem] sm:h-[2.5rem] bg-blue-600 flex items-center justify-evenly text-white font-semibold rounded-md text-sm md:text-base"
        >
          ADD <BiAddToQueue />
        </Link>
      </Wrapper>
    </div>
  );
};

export default Header;
