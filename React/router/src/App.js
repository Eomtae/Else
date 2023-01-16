import "./Style.scss";
import Main from "./component/Main";
import Sub1 from "./component/Sub1";
import Sub2 from "./component/Sub2";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
        <Link to="/sub1/0">Sub1</Link>
        <Link to="/sub2">Sub2</Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/sub1/:id" element={<Sub1 />}></Route>
          <Route path="/sub2" element={<Sub2 />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}
/* *이 붙으면 모든 문자열이 뒤에 붙어도 가능
    :이 붙으면 뒤에 /하고 어떤 숫자/문자를 쓰게 되면 
    params라는 변수에 그대로 담김*/

export default App;
