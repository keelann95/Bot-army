// import React from 'react'
// import { useEffect, useState } from 'react'

const BotCollection = () => {


  return (
    <div className=" flex  flex-wrap justify-evenly  min-h-screen bg-gray-100 p-4 gap-[6px]">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img 
          className="w-full" 
          src="https://robohash.org/nostrumrepellendustenetur.png?size=300x300&set=set1" 
          alt="wHz-93" 
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">wHz-93</div>
          <p className="text-gray-700 text-base mb-2">Support</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            more
          </button>
        </div>
      </div>

      

    </div>
    
  )
}

export default BotCollection