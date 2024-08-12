import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';

const BotDetails = () => {
    const [bot, setBot] = useState([])
    const { id } = useParams();

    useEffect(() => {
      fetch(`  https://bot-backend-six.vercel.app/bots/${id}`)
        .then((res) => res.json())
        .then((data) => setBot(data))
        .catch((error) => console.log(error));
    }, [id]);

    if (!bot) return <div className="text-center mt-8">Loading...</div>;

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img className="h-48 w-full object-cover md:w-48" src={bot.avatar_url} alt={bot.name} />
                    </div>
                    <div className="p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Bot Details</div>
                        <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{bot.name}</h1>
                        <p className="mt-2 text-gray-500">Class: {bot.bot_class}</p>
                        <div className="mt-4">
                            <div className="flex items-center">
                                <span className="text-gray-700 font-bold mr-2">ID:</span>
                                <span className="text-gray-600">{bot.id}</span>
                            </div>
                            <div className="flex items-center mt-2">
                                <span className="text-gray-700 font-bold mr-2">Health:</span>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-green-600 h-2.5 rounded-full" style={{width: `${bot.health}%`}}></div>
                                </div>
                                <span className="ml-2">{bot.health}</span>
                            </div>
                            <div className="flex items-center mt-2">
                                <span className="text-gray-700 font-bold mr-2">Damage:</span>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-red-600 h-2.5 rounded-full" style={{width: `${bot.damage}%`}}></div>
                                </div>
                                <span className="ml-2">{bot.damage}</span>
                            </div>
                            <div className="flex items-center mt-2">
                                <span className="text-gray-700 font-bold mr-2">Armor:</span>
                                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${bot.armor}%`}}></div>
                                </div>
                                <span className="ml-2">{bot.armor}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    
                <Link className=' flex  pb-4  justify-end pr-8 '><button className=' bg-gray-500 rounded-xl pr-9 pl-9'>ADD</button></Link>
                </div>
            </div>
        </div>
    )
}

export default BotDetails