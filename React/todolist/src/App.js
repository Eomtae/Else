import { useState, useRef, useEffect } from "react";
import "./App.scss";

function App() {
  const [data, setData] = useState([]),
    [todoNum, setTodoNum] = useState(0),
    elInput = useRef(),
    elItems = useRef([]),
    count = useRef(0);

  useEffect(() => {
    setTodoNum(data.length);
  }, [data]); //data의 값을 배열에 넣게되면 data의 값이 변할 때 마다 실행 가능

  const update = () => {};

  const add = (e) => {
    // input값을 받아와서 data변수에 넣어주는 일
    e.preventDefault();
    let value = { num: ++count.current, todo: elInput.current.value };
    setData([...data, value]); //...으로 구조분해를 하게 되면 배열안에 있던 애들이 몽땅 빠져나옴
  };
  console.log(data);

  const remove = (n) => {
    let removeData = data.filter((obj) => obj.num !== n); // filter: 내가 원하는 구문을 앞에 removeData에 넣어주는 것
    setData(removeData);
  };
  const state = (e) => {
    if (e.target.tagName != "BUTTON") {
      e.target.classList.toggle("active");

      let king = elItems.current.filter(
        (item) => item.className != "active"
      ).length;

      setTodoNum(king);
    }
  };

  return (
    <div className="App">
      <article>
        <h1>Todolist</h1>
        <p>할 일 {todoNum}개 남음</p>
        <ul className="list">
          {data &&
            data.map((obj, key) => {
              return (
                <li
                  ref={(el) => (elItems.current[key] = el)}
                  onClick={state}
                  key={obj.num}
                >
                  {obj.todo}
                  <button onClick={() => remove(obj.num)}>삭제</button>
                </li>
              );
            })}
        </ul>
        <div className="write">
          <form onSubmit={add}>
            <input
              ref={elInput}
              type="text"
              name="w"
              placeholder="할 일을 입력하세요."
            />
            <input type="submit" value="저장" />
          </form>
        </div>
      </article>
    </div>
  );
}

export default App;
