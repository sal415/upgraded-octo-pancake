import React from "react";
import BotSpecs from './BotSpecs'
function YourBotArmy({army,releaseBot}) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/* {
            party.map((bot) => {
              return(

              )
            })
            
            }
           */}
            Your Bot Army
          {
            army.map((bot) => {
              return (
                <div onClick = {() => releaseBot(bot)}>
                <BotSpecs bot={bot} />

                
                </div>
              )
            })
          }

        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
