import "./Test.scss";
import $ from "jquery";
function Test(props) {
  console.log(props.b);
  $("div").css("color", "red");
  return (
    <div className="banner">
      <img src={props.b}></img>
    </div>
  );
}

export default Test;
