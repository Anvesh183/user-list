import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./AddPlayer.css";

const AddPlayer = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredJersey, setEnteredJersey] = useState("");

  const addPlayerHandler = (event) => {
    event.preventDefault();

    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      enteredJersey.trim().length === 0
    ) {
      return;
    }
    if (+enteredAge < 0 || +enteredJersey < 0) {
      return;
    }

    props.onAddPlayer(enteredName, enteredAge, enteredJersey);

    setEnteredName("");
    setEnteredAge("");
    setEnteredJersey("");
  };

  const playerNameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const jerseyChangeHandler = (event) => {
    setEnteredJersey(event.target.value);
  };

  return (
    <Card className="input-form">
      <form onSubmit={addPlayerHandler}>
        <label htmlFor="player-name">Player Name</label>
        <input
          id="player-name"
          type="text"
          value={enteredName}
          onChange={playerNameChangeHandler}
        />
        <label htmlFor="jersey">Jersey Number</label>
        <input
          type="text"
          name="jersey"
          id="jersey"
          value={enteredJersey}
          onChange={jerseyChangeHandler}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="number"
          name="age"
          id="age"
          value={enteredAge}
          onChange={ageChangeHandler}
        />
        <Button type="submit">Add Player</Button>
      </form>
    </Card>
  );
};

export default AddPlayer;
