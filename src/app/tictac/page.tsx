"use client";
import React, { useState } from "react";
import SquareBox from "../components/TicTac/SquareBox";

const itemArray = Array(9).fill("");

const TicTacPage = () => {
  const [userTurn, setUserTurn] = useState(true);
  const [boxValue, setBoxValue] = useState(itemArray);

  const handleBoxClick = (idx) => {
    console.log("clicked box", userTurn, idx);
    setBoxValue((prev) =>
      prev.map((item, index) =>
        index === idx ? (userTurn ? "cross" : "circle") : item
      )
    );
    setUserTurn(!userTurn);
  };

  console.log(boxValue);

  return (
    <div>
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
