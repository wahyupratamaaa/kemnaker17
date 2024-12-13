import { FaRegUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { VscFeedback } from "react-icons/vsc";

import { BiFoodMenu } from "react-icons/bi";
import { TfiTimer } from "react-icons/tfi";
import { BsShopWindow } from "react-icons/bs";

const Navbar = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("product")) || [];
    setCount(storedProducts.length);
  }, []);
  return (
    <header className="mx-32 max-w-screen-xl w-full mb-4 flex items-center justify-between px-6 py-4 border-red-800">
      <div className="flex items-center gap-5 w-auto sm:w-auto">
        <a href="/">
          {" "}
          <BsShopWindow className="h-10 w-10 text-red-800 " />
        </a>

        <div className="hidden sm:block">
          <h1 className="text-2xl font-bold text-gray-600 cursor-pointer flex self-center gap-2">
            Madura24Jam <TfiTimer />
          </h1>
          <span className="text-sm font-medium text-gray-500">
            Hey wahyupratama!
          </span>
        </div>
      </div>

      <div className="flex w-1/2 sm:w-1/3 justify-center space-x-2">
        <input
          placeholder="Search Restaurants"
          className="w-36 rounded-lg border text-gray-400 border-gray-400 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:outline-none focus:ring focus:ring-orange-400 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
        />
      </div>
      <div className="flex items-center gap-2 sm:flex-row flex-col sm:w-auto">
        <a
          href="/Menu"
          className="relative rounded-full border p-3 text-gray-900 transition-all duration-500 ease-in-out hover:bg-gray-800 hover:text-white"
        >
          <VscFeedback className="text-2xl" />
        </a>
        <a
          href="/Checkout"
          className="relative rounded-full border p-3 text-gray-900 transition-all duration-500 ease-in-out hover:bg-gray-800 hover:text-white"
        >
          <BiFoodMenu className="text-2xl" />
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold leading-6 text-white bg-red-800 rounded-full">
            {count}
          </span>
        </a>
        <a
          href="https://www.linkedin.com/in/wahyupratama24/"
          className="relative rounded-full border p-3 text-gray-900 transition-all duration-500 ease-in-out hover:bg-gray-800 hover:text-white"
        >
          <FaRegUserCircle className="text-2xl" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
