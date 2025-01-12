import React from "react";

const FourBoxes = () => {
  return (
    <div className="sm:flex font-sans -mt-[6px] sm:-mt-[60px] lg:-mt-12 xl:gap-5 lg:-ml-0 -ml-[50px] sm:-ml-[60px] justify-center items-center xl:mt-4">
      <div className="lg:flex">
        <div className="bg-white border-[rgb(224,226,229)] xl:scale-100 scale-75 w-[196px] border-[2px] pb-5 p-2 rounded-xl">
          <div className="flex items-center gap-2 text-gray-400">
            <i className="fa-solid fa-stairs"></i>
            <p className="font-[500]">Improvements</p>
          </div>
          <p className="text-sm font-[500] mt-3">Subject Understanding</p>
          <div className="text-white flex gap-1 flex-wrap mt-4 text-[0.48rem]">
            <span className="bg-[rgb(28,185,180)] cursor-pointer px-2 py-1 rounded-full">
              Geography
            </span>
            <span className="bg-[rgb(234,179,8)] cursor-pointer px-2 py-1 rounded-full">
              Politics
            </span>
            <span className="bg-[rgb(28,185,180)] cursor-pointer px-2 py-1 rounded-full">
              Current Affairs
            </span>
            <span className="bg-[rgb(185,28,28)] cursor-pointer px-2 py-1 rounded-full">
              General Studies
            </span>
            <span className="bg-[rgb(28,185,180)] cursor-pointer px-2 py-1 rounded-full">
              Mathematics
            </span>
            <span className="bg-[rgb(197,201,207)] cursor-pointer px-2 py-1 rounded-full">
              Social Studies
            </span>
            <span className="bg-[rgb(185,28,28)] cursor-pointer px-2 py-1 rounded-full">
              English Literature
            </span>
            <span className="bg-[rgb(234,179,8)] cursor-pointer px-2 py-1 rounded-full">
              Indian History
            </span>
            <span className="bg-[rgb(28,185,180)] cursor-pointer px-2 py-1 rounded-full">
              Economics
            </span>
          </div>
        </div>

        <div className="bg-white border-[rgb(224,226,229)] lg:-ml-8 -ml-0 -mt-10 lg:mt-0 xl:ml-4  xl:scale-100 scale-75 w-[196px] border-[2px] p-2 pb-4 rounded-xl">
          <div className="flex items-center gap-2  text-gray-400">
            <i className="fa-regular fa-clock"></i>
            <p className="font-[500]">Response Time</p>
          </div>
          <div className="mt-3">
            <span className="text-[0.6rem] text-white rounded-sm px-1 py-[0.1rem] bg-[rgb(90,95,188)]">
              Std Time - 2min
            </span>
          </div>
          <div className="flex bg-[rgb(247,246,252)] border-dashed mt-2 border-[0.09rem] px-[5px] rounded-[3px] border-[rgb(90,95,188)] justify-between items-center">
            <p className="text-[rgb(28,185,180)] text-2xl font-semibold">
              60<span className="text-gray-400 font-bold text-[17px]">% </span>
              <span className=" text-gray-400 text-[12px]">Ans took</span>
            </p>
            <div className="flex gap-1 justify-center items-center">
              <i className="fa-solid text-xl text-red-600 fa-arrow-up"></i>
              <p className="text-[rgb(90,95,188)] font-semibold">
                2<span className="font-normal">min</span>
              </p>
            </div>
          </div>
          <div className="border-gray-300 border-[0.06rem]  mt-4 mb-2 w-full"></div>
          <p className="font-semibold text-xl text-center mt-3">
            You are <span className="text-red-600">slow</span> !
          </p>
        </div>
      </div>

      <div className="lg:flex ml-9 sm:ml-0 -mt-10 sm:-mt-0">
        <div className="bg-white border-[rgb(224,226,229)] lg:-ml-8 -ml-[35px] -mt-0  xl:ml-0 xl:scale-100 scale-75 w-[196px] border-[2px] p-2 rounded-xl">
          <div className="flex items-center gap-2 text-gray-400">
            <i className="fa-solid fa-stairs"></i>
            <p className="font-[500]">Approach Data</p>
          </div>
          <div className="flex-col justify-center mt-[5px]  items-center">
            <div className="border-[rgb(206,205,239)] duration-150 hover:bg-[rgb(171,175,255)] py-[4px] mb-[3px] px-[4px] border-[1px] rounded-[4px] flex justify-start gap-1 items-center">
              <div className="bg-[rgb(227,225,245)] px-[3px] rounded-sm text-[rgb(90,95,188)] font-semibold">
                25<span className="text-[11px] font-bold text-gray-400">%</span>
              </div>
              <div className="text-[13px] font-semibold">
                Based on
                <span className="text-[rgb(90,95,188)] text-[14px]">
                  {" "}
                  Facts
                </span>
              </div>
            </div>

            <div className="border-[rgb(206,205,239)] duration-150 hover:bg-[rgb(171,175,255)] py-[4px] mb-[3px] px-[4px] border-[1px] rounded-[4px] flex justify-start gap-1 items-center">
              <div className="bg-[rgb(227,225,245)] px-[3px] rounded-sm text-[rgb(90,95,188)] font-semibold">
                32<span className="text-[11px] font-bold text-gray-400">%</span>
              </div>
              <div className="text-[13px] font-semibold">
                Based on
                <span className="text-[rgb(90,95,188)] text-[14px]">
                  {" "}
                  Analysis
                </span>
              </div>
            </div>
            <div className="border-[rgb(206,205,239)] duration-150 hover:bg-[rgb(171,175,255)] py-[4px] mb-[3px] px-[4px] border-[1px] rounded-[4px] flex justify-start gap-1 items-center">
              <div className="bg-[rgb(227,225,245)] px-[4px] rounded-sm text-[rgb(90,95,188)] font-semibold">
                19<span className="text-[11px] font-bold text-gray-400">%</span>
              </div>
              <div className="text-[13px] font-semibold">
                Based on
                <span className="text-[rgb(90,95,188)] text-[14px]">
                  {" "}
                  Elimination
                </span>
              </div>
            </div>
            <div className="border-[rgb(206,205,239)] duration-150 hover:bg-[rgb(171,175,255)] py-[4px] px-[4px] border-[1px] rounded-[4px] flex justify-start gap-1 items-center">
              <div className="bg-[rgb(227,225,245)] px-[3px] rounded-sm text-[rgb(90,95,188)] font-semibold">
                24<span className="text-[11px] font-bold text-gray-400">%</span>
              </div>
              <div className="text-[13px] font-semibold">
                Based on
                <span className="text-[rgb(90,95,188)] text-[14px]">
                  {" "}
                  Guess
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border-[rgb(224,226,229)] lg:-ml-8 -ml-[35px] lg:mt-0 -mt-10 xl:ml-4 xl:scale-100 scale-75 w-[196px] border-[2px] p-2  rounded-xl">
          <div className="flex items-center gap-2 text-gray-400">
          <img className="w-5 -mr-1 grayscale-1" src="https://static.vecteezy.com/system/resources/previews/041/436/837/non_2x/yellow-star-sparkles-free-png.png" alt="" />
            <p className="font-[500]">Suggestions</p>
          </div>
          <div className="flex justify-center mt-3 mb-8 gap-1 items-center">
            <div className="flex-col ">
              <span className="bg-[rgb(90,95,188)] text-white text-[0.6rem] rounded-[3px] px-[2px]">
                Q. 1-12
              </span>
              <div className="bg-[rgb(242,241,250)] mt-2 px-2 py-2 text-lg font-semibold border-dashed border-[0.09rem] rounded-[3px] border-[rgb(90,95,188)]">
                40<span className=" font-[500] text-sm">sec</span>
              </div>
              <p className="text-center text-[rgb(28,185,180)] font-semibold mt-2 text-[13px]">
                Easy
              </p>
            </div>
            <div className="flex-col ">
              <span className="bg-[rgb(90,95,188)] text-white text-[0.6rem] rounded-[3px] px-[2px]">
                Q. 12-32
              </span>
              <div className="bg-[rgb(242,241,250)] mt-2 px-1 py-2 text-lg font-semibold border-dashed border-[0.09rem] rounded-[3px] border-[rgb(90,95,188)]">
                1.5<span className=" font-[500] text-sm">min</span>
              </div>
              <p className="text-center text-[rgb(234,179,8)] font-semibold mt-2 text-[13px]">
                Medium
              </p>
            </div>
            <div className="flex-col ">
              <span className="bg-[rgb(90,95,188)] text-white text-[0.6rem] rounded-[3px] px-[2px]">
                Q. 32-40
              </span>
              <div className="bg-[rgb(242,241,250)] mt-2 px-[11px] py-2 text-lg font-semibold border-dashed border-[0.09rem] rounded-[3px] border-[rgb(90,95,188)]">
                3<span className=" font-[500] text-sm">min</span>
              </div>
              <p className="text-center text-[rgb(185,28,28)] font-semibold mt-2 text-[13px]">
                Hard
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourBoxes;
