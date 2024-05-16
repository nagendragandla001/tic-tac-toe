import { useEffect, useState } from "react";

export default function Player({
  name,
  symbol,
  activePlayer,
  updateActivePlayer,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  function handleEditChange() {
    setIsEdit((oldEdit) => !oldEdit);
  }

  useEffect(() => {
    if (isEdit) {
      updateActivePlayer(symbol);
    }
  }, [isEdit]);

  function handlePlayerChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEdit) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={handlePlayerChange}
      />
    );
  }

  return (
    <li className={`${activePlayer ? "active" : undefined}`}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditChange}>{isEdit ? "Save" : "Edit"}</button>
    </li>
  );
}
