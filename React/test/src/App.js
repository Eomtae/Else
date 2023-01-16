import "./App.css";
import "./test.scss";
import sy from "./test.module.css";

function App() {
  let style = {
    "font-size": "3rem",
    color: "blue",
  };

  return (
    <div className="App">
      <img src="./logo.svg"></img>
      <p style={style}> 스타일링 중이야요~~~</p>
      <p className={sy.color}>css 모듈형식 표현하기</p>
    </div>
  );
}

export default App;
