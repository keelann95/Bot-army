import  { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const BotDetails = () => {

    const [bots, setBots] = useState([])

    const { id } = useParams();

    useEffect(() => {
      fetch(`http://localhost:3000/bots/${id}`)
        .then((res) => res.json())
        .then((bots) => setBots(bots))
        .catch((error) => console.log(error));
    }, [id]);

  return (
    <div>
      <h1>Bot Details</h1>
      <hr />
      <img src={bots.avatar_url} alt={bots.name} />
      <h1>Name: {bots.name}</h1>
      <h3>Class: {bots.bot_class}</h3>
      <h5>ID: {bots.id}</h5>
      <h5>Health: {bots.health}</h5>
      <h5>Damage: {bots.damage}</h5>
      <h5>Armor: {bots.armor}</h5>
      <hr />
    </div>
  )
}

export default BotDetails
