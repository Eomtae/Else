import "./Style.scss";
import Media from "./component/Media";

import data from "./data/media_data.json";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* {title.map((res) => {
          return <Route key={res} path={`/${res}`}></Route>;
        })} */}
        <Route path="/movies" element={<Media content={data.movies} />}></Route>
        <Route path="/music" element={<Media content={data.music} />}></Route>
        <Route path="/apps" element={<Media content={data.apps} />}></Route>
        <Route
          path="/software"
          element={<Media content={data.software} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
