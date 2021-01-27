import React from "react";

const Gameover = ({ word, newGame, winner }) => {
  return (
    <div>
      <h3>GAME OVER</h3>
      {winner ? <p>Well done, you win!</p> : <p>You fool!</p>}
      <button onClick={newGame}>Play again?</button>
    </div>
  );
};

export default Gameover;
