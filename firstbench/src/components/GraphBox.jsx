import React from "react";

const GraphBox = () => {
  return (
    <div className="bg-white border-[rgb(224,226,229)] -ml-[480px] sm:ml-0 xl:scale-100 scale-50 sm:scale-75 border-[2px] w-[412px] -mt-[90px] sm:-mt-[150px] lg:-mt-12 xl:mt-4 p-2 rounded-xl">
      <div className="flex items-center gap-2 text-gray-400">
        <i className="fa-solid fa-code-compare"></i>
        <p className="font-[500]">Compare Accuracy</p>
      </div>

      <div className="flex items-center ml-16 mr-10  mt-8 justify-center relative gap-6">
        <div className="absolute z-0 bg-[rgb(171,237,233)] h-2 w-72 "></div>
        <p className="text-xs z-10 bg-[rgb(224,226,229)] hover:bg-[rgb(44,190,185)] hover:text-white cursor-pointer duration-200 font-semibold text-gray-500 px-2 py-[6px] rounded-[5px]">
          10<span className="text-[8px]">MIN</span>
        </p>
        <p className="text-xs z-10 bg-[rgb(44,190,185)]  font-semibold text-white px-2 py-[6px] rounded-[5px]">
          15<span className="text-[8px]">MIN</span>
        </p>
        <p className="text-xs z-10 bg-[rgb(224,226,229)] hover:bg-[rgb(44,190,185)] hover:text-white cursor-pointer duration-200 font-semibold text-gray-500 px-2 py-[6px] rounded-[5px]">
          30<span className="text-[8px]">MIN</span>
        </p>
        <p className="text-xs z-10 bg-[rgb(224,226,229)] hover:bg-[rgb(44,190,185)] hover:text-white cursor-pointer duration-200 font-semibold text-gray-500 px-2 py-[6px] rounded-[5px]">
          45<span className="text-[8px]">MIN</span>
        </p>
      </div>

      <div className="ml-16 mr-10 relative">
        <div className="absolute w-3 rounded-t-md  h-[120px] left-[28px] bottom-[40px] bg-[rgb(131,133,214)]"></div>
        <div className="absolute w-3 rounded-t-md  h-[60px] left-[65px] bottom-[40px] bg-[rgb(131,133,214)]"></div>
        <div className="absolute w-3 rounded-t-md  h-[45px] left-[101px] bottom-[40px] bg-[rgb(131,133,214)]"></div>
        <div className="absolute w-3 rounded-t-md  h-[83px] left-[139px] bottom-[40px] bg-[rgb(131,133,214)]"></div>
        <div className="absolute w-3 rounded-t-md  h-[73px] left-[176px] bottom-[40px] bg-[rgb(131,133,214)]"></div>
        <div className="absolute w-3 rounded-t-md  h-[60px] left-[213px] bottom-[40px] bg-[rgb(131,133,214)]"></div>
        <div className="absolute w-3 rounded-t-md  h-[85px] left-[249px] bottom-[40px] bg-[rgb(131,133,214)]"></div>
        <p className="absolute text-xs font-semibold -left-[33px] -top-[7px] text-gray-400">100%</p>
        <p className="absolute text-xs font-semibold -left-[28px] top-[26px] text-gray-400">75%</p>
        <p className="absolute text-xs font-semibold -left-[28px] top-[60px] text-gray-400">50%</p>
        <p className="absolute text-xs font-semibold -left-[28px] top-[93px] text-gray-400">25%</p>
        <p className="absolute text-xs font-semibold -left-[21px] top-[127px] text-gray-400">0%</p>
        <p className="absolute top-[55px] -left-[78px] text-gray-500 text-sm -rotate-90">Accuracy</p>
        <div className=" w-full mt-4 border-gray-300 border-[1px]"></div>
        <div className=" w-full mt-8 border-gray-300 border-[1px]"></div>
        <div className=" w-full mt-8 border-gray-300 border-[1px]"></div>
        <div className=" w-full mt-8 border-gray-300 border-[1px]"></div>
        <div className=" w-full mt-8 border-gray-300 border-[1px]"></div>
        <div className="flex justify-evenly items-center text-xs mt-1">
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p>7</p>
        </div>
        <p className="text-center text-gray-500 text-sm">Slots</p>
      </div>
    </div>
  );
};

export default GraphBox;
