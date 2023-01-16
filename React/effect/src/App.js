import "./App.css";
import { useState } from "react";
import { HashRouter, Link, Routes, Route } from "react-router-dom";
import List from "./page/List";
import Write from "./page/Write";

function App() {
  let [itemData, setItemData] = useState();

  function params(e) {
    // JSON.params('{"name":"홍길동"}') -> 문자를 객체로 만들어 주는 것
    console.log(e);
    // setItemData({ ...e });
  }

  return (
    <HashRouter>
      <Routes>
        <Route path="/write" element={<Write fn={params} />}></Route>
        <Route path="/" element={<List item={itemData} />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
