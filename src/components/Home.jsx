// import React from 'react'

const Home = () => {
  return (
    <div className="relative bg-cover bg-center min-h-screen overflow-hidden flex items-center" 
         style={{backgroundImage: "url('https://png.pngtree.com/background/20230414/original/pngtree-robot-cute-cartoon-background-picture-image_2424335.jpg')"}}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-16 text-center">
        <h1 className="text-6xl md:text-8xl font-extrabold text-yellow-500 mb-6">
          Hello <span className="text-gray-300">There</span>
        </h1>
        <p className="text-xl md:text-3xl text-yellow-200 max-w-3xl mx-auto ">
          A galactic overlord hired me, a Moringa web developer, to develop a 
          <span className="font-bold text-white"> galactic web app </span> 
          that will allow a user to browse through a list of robots, view a robot's details, and enlist a bot into their army.
        </p>
        <div className="mt-12">
          <a href="/botCollection" className="px-8 py-4 bg-yellow-600 text-white font-bold text-lg rounded-full hover:bg-yellow-500 transition duration-300 ease-in-out transform  hover:scale-110">
            Explore Bots
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home