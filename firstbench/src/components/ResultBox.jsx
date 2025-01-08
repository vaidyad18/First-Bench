import React from "react";

const ResultBox = () => {
  return (
    <div className="bg-[rgb(247,246,252)] pb-5  mt-6 w-[350px] font-sans flex-col justify-center items-center rounded-xl border-[rgb(224,226,229)] border-[2px]">
      <div className="flex-col text-center mb-10 justify-center  items-center">
        <img className="w-32 mx-auto -hue-rotate-60" src="/image1.png" alt="" />
        <p className="text-[rgb(90,95,188)] text-3xl font-semibold">
          Your Result!
        </p>
        <p className="text-gray-500 text-sm">
          All your insights and details in one place
        </p>
      </div>

      <div className="bg-white px-4 border-[rgb(224,226,229)] mb-8 mx-5 border-[2px] rounded-xl">
        <div className="bg-[rgb(247,246,252)] py-1  mt-4 rounded-md flex justify-between items-center">
          <div className="flex justify-center items-center">
            <i className="fa-regular ml-2 rounded-md text-xl text-black bg-[rgb(219,216,247)] px-3 py-2 fa-calendar-check"></i>
            <div className="flex-col ml-2">
              <p className="bg-[rgb(90,95,188)] mt-1 text-[0.5rem] text-white font-semibold rounded-full px-2 py-[1px]">
                YOU'VE PASSED
              </p>
              <p className="font-semibold text-xl ml-1">
                136<span className="text-gray-400 text-[0.6rem]"> / 240</span>
              </p>
            </div>
          </div>
          <div className="flex justify-center  items-center gap-2 mr-2">
            <div className="border-gray-300 border-[0.07rem] h-10"></div>
            <div className="flex-col justify-center items-center">
              <p className="bg-[rgb(0,148,145)] text-[0.6rem]  py-[0.1rem] px-[0.4rem] rounded-sm text-white font-semibold">
                76%
              </p>
              <p className="text-[rgb(0,148,145)] text-[0.6rem] font-semibold">
                ACCURACY
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[rgb(247,246,252)] mt-3  py-1 rounded-md  items-center">
          <div className="flex justify-start items-center">
            <div className="ml-2 rounded-md text-xl text-black bg-[rgb(219,216,247)] p-[0.15rem]">
              <img
                className="w-9 rounded-md"
                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg"
                alt=""
              />
            </div>
            <div className="flex-col ml-2">
              <p className=" mt-1 font-bold text-[0.65rem] text-[rgb(90,95,188)]  rounded-full ml-1 ">
                Top Score
              </p>
              <p className="font-semibold text-xl ml-1">
                230<span className="text-gray-400 text-[0.6rem]"> / 240</span>
              </p>
            </div>
          </div>
          <div className="mx-2">
            <div className="border-gray-300 border-[0.06rem]  mt-1 mb-2 w-full"></div>
          </div>
          <div className="flex justify-between items-center mb-1">
            <p className="text-[0.55rem] font-bold ml-2 text-gray-400">
              By <span className="text-black">Parth Akotkar</span>
            </p>
            <p className="text-[0.6rem] rounded-full bg-[rgb(0,148,145)] px-2 font-semibold text-white mr-2">
              92% <span className="text-[0.47rem]">ACCURACY</span>
            </p>
          </div>
        </div>

        <div className="ml-1 mt-2 font-[600]">Improve your Marks</div>
        <div className="ml-1 font-semibold text-[0.64rem] text-gray-400">
          Improve your score by practising more.
        </div>

        <button className="my-5 py-1 text-sm rounded-md bg-[rgb(90,95,188)] text-white font-semibold w-full">
          Practice more
        </button>
      </div>

      <div className="bg-white px-4 border-[rgb(224,226,229)] mx-5 pt-2 border-[2px] rounded-xl">
        <div className="ml-1 mt-2 text-lg font-[650]">Revisit Paper</div>
        <div className="ml-1 font-semibold text-[0.8rem] mt-1 text-gray-500">
          Challenge your friends by simply sharing a link to this test
        </div>

        <div className="mx-6">
          <button className="my-6 py-1 flex justify-center items-center gap-2 rounded-md bg-[rgb(90,95,188)] text-white font-semibold w-full">
            <i class="fa-solid text-white text-sm fa-file-import"></i> Visit
          </button>
        </div>

        <div className="flex gap-1 mb-3">
          <i class="text-[0.8rem] mt-1 text-gray-400 fa-solid fa-circle-info"></i>
          <div className="text-[0.64rem] text-gray-400">
            Instructions for how to upload your handwritten material in given
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultBox;
