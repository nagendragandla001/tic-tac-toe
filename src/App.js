import { useState } from "react";
import "./App.css";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";

const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [playerName, setPlayerName] = useState("X");
  const [gameBoard, setGameBoard] = useState(INITIAL_BOARD);

  function handleUpdateActivePlayer(symbol) {
    setPlayerName(symbol);
  }

  function handleUpdatePlayer() {
    setPlayerName(playerName === "X" ? "O" : "X");
  }

  function handleCardClick(rowIndex, colIndex) {
    const updatedGameBoard = [...gameBoard.map((board) => [...board])];

    updatedGameBoard[rowIndex][colIndex] = playerName;

    setGameBoard(updatedGameBoard);
    handleUpdatePlayer();
  }

  function resetBaord() {
    setGameBoard([...INITIAL_BOARD.map((m) => [...m])]);
  }

  return (
    <main className="tic-tac-container">
      <div id="game-container">
        <ol id="players">
          <Player
            name="Player 1"
            symbol="X"
            activePlayer={playerName === "X"}
            updateActivePlayer={handleUpdateActivePlayer}
          />
          <Player
            name="Player 2"
            symbol="O"
            activePlayer={playerName === "O"}
            updateActivePlayer={handleUpdateActivePlayer}
          />
        </ol>

        <GameBoard gameBoard={gameBoard} onCardClick={handleCardClick} />

        <button style={{ padding: "1em" }} onClick={resetBaord}>
          Reset
        </button>
      </div>

      <div>Logs</div>
    </main>
  );
}

export default App;
