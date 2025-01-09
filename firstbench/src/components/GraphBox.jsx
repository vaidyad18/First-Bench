import React from "react";

const GraphBox = () => {
  return (
    <div className="bg-white border-[rgb(224,226,229)] border-[2px] w-[412px] mt-4 p-2 rounded-xl">
      <div className="flex items-center gap-2 text-gray-400">
        <i className="fa-solid fa-code-compare"></i>
        <p className="font-[500]">Compare Accuracy</p>
      </div>

      <div className="flex items-center  mt-5 justify-center relative gap-7">
        <div className="absolute z-0 bg-[rgb(171,237,233)] h-2 w-80 "></div>
        <p className="text-sm z-10 bg-[rgb(224,226,229)] font-semibold text-gray-500 px-2 py-1 rounded-[5px]">10<span className="text-[8px]">MIN</span></p>
        <p className="text-sm z-10 bg-[rgb(44,190,185)] font-semibold text-white px-2 py-1 rounded-[5px]">15<span className="text-[8px]">MIN</span></p>
        <p className="text-sm z-10 bg-[rgb(224,226,229)] font-semibold text-gray-500 px-2 py-1 rounded-[5px]">30<span className="text-[8px]">MIN</span></p>
        <p className="text-sm z-10 bg-[rgb(224,226,229)] font-semibold text-gray-500 px-2 py-1 rounded-[5px]">45<span className="text-[8px]">MIN</span></p>
      </div>
    </div>
  );
};

export default GraphBox;
