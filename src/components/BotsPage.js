import React, { useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import {useState, useEfect} from 'react'

function BotsPage() {
const [bots, setBots] = useState([])
const [army, setArmy] = useState([])

  useEffect(() => {
    const request = async () => {
      let req = await fetch('http://localhost:8002/bots')
      let res = await req.json()
      setBots(res)
    }
    request()
  },[])


const addBot = (bot) => {
if(army.includes(bot)) return;
setArmy([...army,bot])
}


const releaseBot = (bot) => {
     setArmy(army.filter((a) => {return a.id !== bot.id}))
}

const killBot = async (bot) => {
  let req = await fetch(`http://localhost:8002/bots/${bot.id}`, {
    method:'DELETE'
  })
  setBots((prevstate) =>{ 
    return[...prevstate.filter((b) => {return b.id !== bot.id})]
})
}



  //start here with your code for step one

  return (
    <div>
      <YourBotArmy army={army} releaseBot={releaseBot} />
      <BotCollection bots={bots} addBot={addBot} killBot={killBot}/>
    </div>
  )
}

export default BotsPage;














