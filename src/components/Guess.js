import { useState } from "react";

function Guess() {
  const [number, setNumber] = useState(0);

  const handleNumber = () => {
    // Generate a random number between 1 and 20
    const randomNumber = Math.floor(Math.random() * 20);
    setNumber(randomNumber);
  };

  return (
    <>
      <h1>Guess Number Game</h1>
      Guess a number between 1 and 20.
      <br />
      <span>{number}</span>
      <button onClick={handleNumber}>Guess!</button>
      <button onClick={handleNumber}>New Game</button>
      
    </>
  );
}
export default Guess;
