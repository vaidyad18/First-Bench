import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[rgb(48,57,71)] font-sans py-3 flex w-full justify-evenly items-center">
      <div className="flex justify-center pl-32 gap-1 items-center">
        <img
          className="w-12"
          src="/logo.png"
          alt=""
        />
        <h1 className="text-white font-semibold text-3xl">Firstbench</h1>
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="flex items-center gap-2">
          <i className="fa-solid text-sm fa-house-chimney-window text-white"></i>
          <p className="text-white">Dashboard</p>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-solid text-sm fa-house-chimney-window text-white"></i>
          <p className="text-white">FirstGuru</p>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-regular text-sm fa-chess-rook text-white"></i>
          <p className="text-white">TownHall</p>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-solid text-sm fa-bolt text-white"></i>
          <p className="text-white">AI Evaluation</p>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-solid text-sm fa-chart-line text-white"></i>
          <p className="text-white">Performance</p>
        </div>
        <div className="flex items-center gap-2">
          <i className="fa-regular text-sm fa-file-lines text-white"></i>
          <p className="text-white">Mock Test</p>
        </div>
      </div>
      <div className="flex justify-center pr-32 gap-7 items-center">
        <i className="fa-regular fa-bell text-white"></i>
        <div className="bg-[rgb(29,38,51)] flex justify-center gap-2 p-[0.2rem] rounded-md items-center">
            <p className="bg-[rgb(248,194,179)] rounded-sm px-2">P</p>
            <p className="text-white text-[0.9rem]">Profile</p>
            <i className="text-white text-[0.7rem] fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
