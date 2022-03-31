import React from "react";
import Card from "../UI/Card";
import "./PlayerList.css";

const PlayerList = (props) => {
  return (
    <Card className="players">
      <ul>
        {props.players.map((player) => {
          return (
            <li key={+props.jerseyNumber}>
              {player.playerName}[{player.jerseyNumber}] is {player.age} years
              old
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default PlayerList;
