import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const Sub1 = () => {
  let { id } = useParams();
  let navi = useNavigate();

  setTimeout(() => {
    navi("/");
  }, 5000);

  let data = [
    { id: 0, name: "황금토끼" },
    { id: 1, name: "검정토끼" },
    { id: 2, name: "하얀토끼" },
  ];
  let result = data.filter((res) => {
    return res.id == id;
  });

  return <div>Sub1의 파라미터 값은 {result[0].name}입니다.</div>;
};

export default Sub1;
