import { FC } from "react";
import { IoClose } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";

type ISquareBoxProps = {
  handleBoxClick?: () => void;
  icon?: "cross" | "circle" | "";
};

const SquareBox: FC<ISquareBoxProps> = ({ handleBoxClick, icon = "" }) => {

  const playerIcon = icon === "cross" ? <IoClose /> : <FaRegCircle />;

  return (
    <div className="tic-tac-square-box-wrapper" onClick={handleBoxClick}>
      <span className={`icon-container ${icon ? icon : ""}`}>{playerIcon}</span>
    </div>
  );
};

export default SquareBox;
