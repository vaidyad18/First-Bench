import React from 'react'

const TimeTakenBox = () => {
  return (
    <div className="bg-white -ml-[180px] sm:-ml-24 lg:-ml-20 xl:ml-[20px] xl:scale-100 scale-50 sm:scale-75 border-[rgb(224,226,229)] pb-3 border-[2px] w-[412px] sm:-mt-[150px] -mt-[90px] lg:-mt-12 xl:mt-4 p-2 rounded-xl">
      <div className="flex items-center gap-2 text-gray-400">
      <i className="fa-regular fa-clock"></i>
        <p className="font-[500]">Time Taken</p>
      </div>

      <div className=' px-2 mt-3 relative'>
        <img className='h-[72px]' src="/scale.png" alt="" />
        <div className='absolute top-10 left-3 bg-red-600 h-3 rounded-[3px] w-[222px]'></div>
        <div className='absolute top-[55px] left-3 bg-green-400 h-3 rounded-[3px] w-[87px]'></div>
        <div className='absolute cursor-pointer hover:bg-[rgba(64,70,180,0.6)] duration-150 bg-[rgba(98,103,199,0.6)] -top-[5px] left-[100px] rounded-[3px] h-[84px] w-3'></div>
      </div>
      <p className='px-2 mt-2 text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dicta eligendi ipsa nisi </p>

      <div className='px-2 mt-6 relative'>
        <img className='h-[62px]' src="/scale2.png" alt="" />
        <div className='absolute top-[43px] left-[205px] bg-red-600 h-3 rounded-[3px] w-[122px]'></div>
        <div className='absolute top-[43px] left-[103px] bg-green-400 h-3 rounded-[3px] w-[87px]'></div>
        <div className='absolute cursor-pointer hover:bg-[rgba(64,70,180,0.6)] duration-150 bg-[rgba(98,103,199,0.6)] -top-[5px] left-[192px] rounded-[3px] h-[73px] w-3'></div>
      </div>
      <p className='px-2 text-xs mt-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia dicta eligendi ipsa nisi </p>
    </div>
  )
}

export default TimeTakenBox
