import "./css/common.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Main from "./component/Main";
import Product from "./component/Product";

function App() {
  let [idx, setIdx] = useState(0);
  let nav = (n) => {
    // const elNav = document.querySelectorAll('header a');
    // elNav[idx].classList.remove('active');
    // elNav[n].classList.add('active');
    // idx = n;

    setIdx(n);
  };

  return (
    <BrowserRouter>
      <header>
        <Link to="/" className={idx == 0 && "active"} onClick={() => nav(0)}>
          HOME
        </Link>
        <Link
          to="/product"
          className={idx == 1 && "active"}
          onClick={() => nav(1)}
        >
          Product
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
