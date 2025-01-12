import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Nav = () => {
  return (
    <>
      <div className="flex cursor-pointer hover:text-[rgb(74,192,188)] items-center gap-2">
        <i className="fa-solid xl:text-sm text-xs fa-house-chimney-window"></i>
        <p className=" xl:text-[14px] text-[10px]">Dashboard</p>
      </div>
      <div className="flex cursor-pointer hover:text-[rgb(74,192,188)] items-center gap-2">
        <img className="w-5 -mr-1 grayscale-1" src="https://static.vecteezy.com/system/resources/previews/041/436/837/non_2x/yellow-star-sparkles-free-png.png" alt="" />
        <p className=" xl:text-[14px] text-[10px]">FirstGuru</p>
      </div>
      <div className="flex cursor-pointer hover:text-[rgb(74,192,188)] items-center gap-2">
        <i className="fa-regular xl:text-sm text-xs fa-chess-rook"></i>
        <p className="xl:text-[14px] text-[10px]">TownHall</p>
      </div>
      <div className="flex cursor-pointer hover:text-[rgb(74,192,188)] items-center gap-2">
        <i className="fa-solid xl:text-sm text-xs fa-bolt"></i>
        <p className="xl:text-[14px] text-[10px]">AI Evaluation</p>
      </div>
      <div className="flex cursor-pointer hover:text-[rgb(74,192,188)] items-center gap-2">
        <i className="fa-solid xl:text-sm text-xs fa-chart-line"></i>
        <p className="xl:text-[14px] text-[10px]">Performance</p>
      </div>
      <div className="flex cursor-pointer items-center gap-2">
        <i className="fa-regular text-[rgb(74,192,188)] xl:text-sm text-xs fa-file-lines"></i>
        <p className="xl:text-[14px] text-[10px] text-[rgb(74,192,188)]">
          Mock Test
        </p>
      </div>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ToggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-[rgb(48,57,71)] font-sans py-[6px] lg:py-3 flex w-full lg:justify-evenly lg:gap-0 gap-12 sm:gap-36 justify-center items-center">
        <div className="flex cursor-pointer justify-center lg:pl-32 gap-1 items-center">
          <img className="xl:w-12 lg:w-8 w-5" src="/logo.png" alt="" />
          <h1 className="text-white  font-semibold text-md lg:text-xl xl:text-3xl">
            Firstbench
          </h1>
        </div>
        <div className="lg:flex items-center text-gray-300 font-semibold hidden justify-center gap-4 xl:gap-7">
          <Nav />
        </div>
        <div className="flex justify-center lg:pr-32 gap-5 xl:gap-7 items-center">
          <i className="fa-regular hover:scale-125 duration-150 hover:text-yellow-300 text-xs lg:text-sm xl:text-md cursor-pointer fa-bell text-white"></i>
          <div className="bg-[rgb(29,38,51)] cursor-pointer flex justify-center gap-1 xl:gap-2 p-[0.2rem] rounded-md items-center">
            <p className="bg-[rgb(248,194,179)] xl:text-md text-[8px] lg:text-xs rounded-sm px-1 lg:py-1 xl:px-2">
              P
            </p>
            <p className="text-white text-[0.6rem] lg:text-[0.8rem] xl:text-[0.9rem]">
              Profile
            </p>
            <i className="text-white text-[0.4rem] lg:text-[0.6rem] xl:text-[0.7rem] fa-solid fa-chevron-down"></i>
          </div>
        </div>

        <button
          onClick={ToggleNav}
          className="lg:hidden flex text-white cursor-pointer font-bold"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <div className="flex basis-full bg-[rgb(48,57,71)]   transition-all text-white h-48  text-lg justify-around flex-col pb-2 pt-1 items-center">
          <Nav />
        </div>
      )}
    </>
  );
};

export default Navbar;
