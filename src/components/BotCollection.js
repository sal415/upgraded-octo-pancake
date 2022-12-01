import React from "react";
import BotCard from './BotCard'


function BotCollection({bots, addBot, killBot}) {

  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {
          bots.map((bot) => {
            return (
              <div onClick = {() => {addBot(bot)}}>
              <BotCard bot={bot} />
              <button onClick = {() => {killBot(bot)}}>X</button>
              </div>

            )
          })
        }
        
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
