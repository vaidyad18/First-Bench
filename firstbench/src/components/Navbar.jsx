import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[rgb(48,57,71)] font-sans py-3 flex w-full justify-evenly items-center">
      <div className="flex cursor-pointer justify-center pl-32 gap-1 items-center">
        <img
          className="w-12"
          src="/logo.png"
          alt=""
        />
        <h1 className="text-white  font-semibold text-3xl">Firstbench</h1>
      </div>
      <div className="flex items-center text-gray-300 font-semibold justify-center gap-7">
        <div className="flex cursor-pointer hover:text-[rgb(74,192,188)] items-center gap-2">
          <i className="fa-solid text-sm fa-house-chimney-window"></i>
          <p className=" text-[14px]">Dashboard</p>
        </div>
        <div className="flex cursor-pointer hover:text-[rgb(74,192,188)] items-center gap-2">
          <i className="fa-solid text-sm fa-house-chimney-window"></i>
          <p className=" text-[14px]">FirstGuru</p>
        </div>
        <div className="flex cursor-pointer hover:text-[rgb(74,192,188)] items-center gap-2">
          <i className="fa-regular text-sm fa-chess-rook"></i>
          <p className="text-[14px]">TownHall</p>
        </div>
        <div className="flex cursor-pointer hover:text-[rgb(74,192,188)] items-center gap-2">
          <i className="fa-solid text-sm fa-bolt"></i>
          <p className="text-[14px]">AI Evaluation</p>
        </div>
        <div className="flex cursor-pointer hover:text-[rgb(74,192,188)] items-center gap-2">
          <i className="fa-solid text-sm fa-chart-line"></i>
          <p className="text-[14px]">Performance</p>
        </div>
        <div className="flex cursor-pointer items-center gap-2">
          <i className="fa-regular text-[rgb(74,192,188)] text-sm fa-file-lines"></i>
          <p className="text-[14px] text-[rgb(74,192,188)]">Mock Test</p>
        </div>
      </div>
      <div className="flex justify-center pr-32 gap-7 items-center">
        <i className="fa-regular hover:scale-125 duration-150 hover:text-yellow-300 cursor-pointer fa-bell text-white"></i>
        <div className="bg-[rgb(29,38,51)] cursor-pointer flex justify-center gap-2 p-[0.2rem] rounded-md items-center">
            <p className="bg-[rgb(248,194,179)] rounded-sm px-2">P</p>
            <p className="text-white text-[0.9rem]">Profile</p>
            <i className="text-white text-[0.7rem] fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
