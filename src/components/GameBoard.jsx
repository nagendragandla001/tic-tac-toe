export default function GameBoard({ gameBoard, onCardClick }) {
  return (
    <section className="game-board">
      <ol
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2em",
        }}
      >
        {gameBoard.map((row, rowIndex) => (
          <li key={rowIndex}>
            {
              <ol style={{ display: "flex", flexDirection: "row", gap: "2em" }}>
                {row.map((col, colIndex) => (
                  <li key={colIndex}>
                    <button
                      style={{
                        height: "100px",
                        width: "100px",
                        cursor: "pointer",
                        background: "#5c5199",
                        border: "none",
                        borderRadius: "8px",
                        color: "#ffffff",
                        fontSize: "48px",
                      }}
                      onClick={() => onCardClick(rowIndex, colIndex)}
                      disabled={gameBoard[rowIndex][colIndex] !== null}
                    >
                      {gameBoard[rowIndex][colIndex]}
                    </button>
                  </li>
                ))}
              </ol>
            }
          </li>
        ))}
      </ol>
    </section>
  );
}
