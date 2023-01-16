import React from "react";
import { Link } from "react-router-dom";

const List = ({ item }) => {
  return (
    <div>
      <ul>
        <li>아이디{item && item.v}</li>
      </ul>
      <Link to="/write">글쓰기</Link>
    </div>
  );
};

export default List;
