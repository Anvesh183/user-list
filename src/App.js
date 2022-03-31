import React, { useState } from "react";
import AddPlayer from "./components/Players/AddPlayer";
import PlayerList from "./components/Players/PlayerList";

function App() {
  const [PlayersList, setPlayersList] = useState([]);

  const addPlayerHandler = (playerName, playerAge, playerJersey) => {
    setPlayersList((prevPlayersList) => {
      return [
        ...prevPlayersList,
        { playerName: playerName, age: playerAge, jerseyNumber: playerJersey },
      ];
    });
  };

  return (
    <div className="App">
      <AddPlayer onAddPlayer={addPlayerHandler} />
      <PlayerList players={PlayersList} />
    </div>
  );
}

export default App;
