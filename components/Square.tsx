import React from "react";

export type Player = "X" | "O" | "BOTH" | null;

type SquareProps = {
  value: Player;
  winner: Player;
  onClick: () => void;
};

const Square: React.FC<SquareProps> = ({ value, winner, onClick }) => {
  if (!value) {
    return <button className="square" disabled={!!winner} onClick={onClick} />;
  }

  return (
    <button disabled className={`square square-${value.toLocaleLowerCase()}`}>
      {value}
    </button>
  );
};

export default Square;
