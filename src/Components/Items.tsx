import React from "react";
import { ItemsProps } from "./Items.model";
import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";

const Items = () => {
  const result = useSelector((state: []) => state);

  return (
    <div>
      {/* <img src={thumbnail.heigh.url} /> */}
      <ItemsList Results={result} />
    </div>
  );
};

export default Items;
