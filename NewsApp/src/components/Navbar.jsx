import React, { useState } from "react";
import { Link } from "react-router-dom";

const navbar = () => {
  const [Toggle, setToggle] = useState(false);

  const chageToggle = () => {
    setToggle(!Toggle);
  };

  return (
    <div className="w-full mr-5">
      <nav className="relative w-full flex flex-col border bg-[#1f1f1f] border-transparent rounded-lg drop-shadow-sm">
        <div className='bg-[url("../images/Navbar.jpg")] p-3 border border-transparent rounded-lg shadow-md'>
          <div className="container mx-auto flex justify-between">
            <div className="border-0 p-1 rounded-lg drop-shadow-lg backdrop-blur-sm">
              <Link
                className=" text-white hover:text-blue-200 text-2xl font-bold"
                to="/general"
              >
                NewsApp
              </Link>
            </div>
            <button
              className="text-white md:hidden bg-black w-8 h-8 border-0 rounded-md p-1 my-auto"
              onClick={chageToggle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div className="text-white max-md:hidden">
          <div
            className="w-full text-sm font-bold mx-auto"
            id="navbarSupportedContent"
          >
            <ul className="flex mx-2 border-0 p-2 rounded-lg drop-shadow-lg backdrop-blur-sm">
              <li className="mr-4">
                <Link
                  className="text-white hover:text-gray-400"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="mr-4">
                <Link className=" hover:text-gray-400" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="mr-4">
                <Link className=" hover:text-gray-400" to="/general">
                  Business
                </Link>
              </li>
              <li className="mr-4">
                <Link className=" hover:text-gray-400" to="/health">
                  Health
                </Link>
              </li>
              <li className="mr-4">
                <Link className=" hover:text-gray-400" to="/science">
                  Science
                </Link>
              </li>
              <li className="mr-4">
                <Link className=" hover:text-gray-400" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {Toggle && (
          <div className="absolute right-0 w-32 border-0  rounded-xl mt-20 text-white bg-[#1f1f1f]">
            <div
              className=" text-sm font-bold mx-auto"
              id="navbarSupportedContent"
            >
              <ul className="flex flex-col mx-2 border-0 p-2 rounded-lg drop-shadow-lg backdrop-blur-sm">
                <li className="mr-4">
                  <Link
                    className="text-white hover:text-gray-400"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="mr-4">
                  <Link className=" hover:text-gray-400" to="/entertainment">
                    Entertainment
                  </Link>
                </li>
                <li className="mr-4">
                  <Link className=" hover:text-gray-400" to="/general">
                    Business
                  </Link>
                </li>
                <li className="mr-4">
                  <Link className=" hover:text-gray-400" to="/health">
                    Health
                  </Link>
                </li>
                <li className="mr-4">
                  <Link className=" hover:text-gray-400" to="/science">
                    Science
                  </Link>
                </li>
                <li className="mr-4">
                  <Link className=" hover:text-gray-400" to="/technology">
                    Technology
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default navbar;
