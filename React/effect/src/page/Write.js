import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Write = ({ fn }) => {
  const nav = useNavigate();
  //   const elId = useRef();
  const [data, setData] = useState({});

  //초기에 한번만 실행 => []
  //변수의 값이 업데이트 될 때마다 실행 => [변수명]
  //컴포넌트가 언마운트될 때 useEffect 안에 return 실행
  useEffect(
    function () {
      console.log("useEffect");
      return function () {
        console.log("컴포넌트에서 나감");
      };
    },
    [data]
  );

  function pageChange() {
    fn(data);
    nav("/");
  }
  function writeFn(e) {
    e.preventDefault(); // 초기화 시키지 않고 그 전의 값 저장
    let { name, value } = e.target; // name(id)과 value(쳤을 때 나오는 값) 동시 송출

    // setData({ name: value });
    // setData({ [name]: value });

    setData({ n: name, v: value });
    // setData({ name: value }); // :이아니고 , 를 하게 되면 name이 value값이 됨

    // console.log(elId.current.value);
  }
  //   console.log(data);
  return (
    <div>
      <form>
        <p>
          <input
            // ref={elId}
            onChange={writeFn}
            type="text"
            name="id"
            placeholder="아이디"
          ></input>
        </p>
        <p>
          <button onClick={pageChange}>저장</button>
        </p>
      </form>
    </div>
  );
};

export default Write;
