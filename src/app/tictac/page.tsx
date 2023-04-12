"use client";
import React, { useState } from "react";
import SquareBox from "../components/TicTac/SquareBox";

const itemArray = Array(9).fill("");

const TicTacPage = () => {
  const [userTurn, setUserTurn] = useState(true);
  const [boxValue, setBoxValue] = useState(itemArray);
  const [infos, setInfos] = useState({
    error: "",
    status: "",
  });

  const handleBoxClick = (idx) => {
    console.log("clicked box", userTurn, idx);
    const hasValue = boxValue[idx];

    if (!hasValue) {
      setBoxValue((prev) =>
        prev.map((item, index) =>
          index === idx ? (userTurn ? "cross" : "circle") : item
        )
      );
      setUserTurn(!userTurn);
      setInfos((prev) => ({
        ...prev,
        error: "",
      }));
    } else {
      setInfos((prev) => ({
        ...prev,
        error: "Cannot Select this block",
      }));
    }
  };

  const handleResetGameClick = () => {
    setBoxValue([...itemArray]);
  };

  console.log(boxValue);

  return (
    <div className="tic-tac-wrapper">
      <div className="game-controller-container">
        <div className="reset-action" onClick={handleResetGameClick}>
          Reset
        </div>
        <div className="player-turn">Turns: {userTurn ? "Users" : "CPU"}</div>
      </div>
      <div className="info-container">{(infos && infos?.error) || ""}</div>
      <div className="box-wrapper">
        {boxValue.map((item, idx) => (
          <SquareBox
            key={idx}
            handleBoxClick={() => handleBoxClick(idx)}
            icon={item}
          />
        ))}
      </div>
    </div>
  );
};

export default TicTacPage;
