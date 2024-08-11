// import React from 'react'
import { useEffect, useState } from 'react'

const BotCollection = () => {
  const [bots, setBots] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then(res => res.json())
      .then((bots) => setBots(bots))
  }, [bots])

  return (
    <div className=" flex  flex-wrap justify-evenly  min-h-screen bg-gray-100 p-4 gap-[6px]">
      {bots.map(bot =>(
        <> 
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img 
        className="w-full" 
        src={bot.avatar_url}
        alt={bot.name}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{bot.name}</div>
        <p className="text-gray-700 text-base mb-2">{bot.bot_class}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          more
        </button>
      </div>
    </div>
    </>
      ))}
     

      

    </div>
    
  )
}

export default BotCollection