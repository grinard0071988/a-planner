import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ objArr }) => {
  return (
    <div>
      {objArr.map((value) => (
        <Tile value={value} key={value.name || value.title} />
      ))}
    </div>
  );
};
