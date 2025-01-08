import React from "react";

const FourBoxes = () => {
  return (
    <div className="flex font-sans gap-5 justify-center items-center mt-6">
      <div className="bg-white border-[rgb(224,226,229)] w-56 border-[2px] pb-5 p-2 rounded-xl">
        <div className="flex items-center gap-2 text-gray-500">
          <i class="fa-solid fa-stairs"></i>
          <p className="font-[500]">Improvements</p>
        </div>
        <p className="text-sm font-[500] mt-3">Subject Understanding</p>
        <div className="text-white flex gap-1 flex-wrap mt-4 text-[0.5rem]">
            <span className="bg-[rgb(28,185,180)] px-3 py-1 rounded-full">Geography</span>
            <span className="bg-[rgb(234,179,8)] px-3 py-1 rounded-full">Politics</span>
            <span className="bg-[rgb(28,185,180)] px-3 py-1 rounded-full">Current Affairs</span>
            <span className="bg-[rgb(185,28,28)] px-3 py-1 rounded-full">General Studies</span>
            <span className="bg-[rgb(28,185,180)] px-3 py-1 rounded-full">Mathematics</span>
            <span className="bg-[rgb(197,201,207)] px-3 py-1 rounded-full">Social Studies</span>
            <span className="bg-[rgb(185,28,28)] px-3 py-1 rounded-full">English Literature</span>
            <span className="bg-[rgb(234,179,8)] px-3 py-1 rounded-full">Indian History</span>
            <span className="bg-[rgb(28,185,180)] px-3 py-1 rounded-full">Economics</span>
        </div>
      </div>

      <div className="bg-white border-[rgb(224,226,229)] border-[2px] p-2 rounded-xl"></div>

      <div className="bg-white border-[rgb(224,226,229)] border-[2px] p-2 rounded-xl"></div>

      <div className="bg-white border-[rgb(224,226,229)] border-[2px] p-2 rounded-xl"></div>
    </div>
  );
};

export default FourBoxes;
