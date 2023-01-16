import { useParams } from "react-router-dom";
import { useRef } from "react";
import data from "../data/m_data.json";
import Item from "./Item";

const Main = () => {
  let { page } = useParams();
  page = page || "movies";
  let number = useRef([]);

  function testFn() {
    console.log(number);
  }
  return (
    <>
      <p ref={(element) => number.current.push(element)}>{test}</p>
      {/* <p ref={(element) => (number.current[1] = element)}>{test}</p> */}
      <section>
        <h2> {page} </h2>
        <div>
          {data[page].map((res, idx) => {
            return <Item info={res} key={idx} />;
          })}
        </div>
      </section>
    </>
  );
};
export default Main;
