import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Item = () => {
  const nav = useNavigate();

  return (
    <div>
      Item
      <button onClick={pageChange}>리스트</button>
    </div>
  );
};

export default Item;
