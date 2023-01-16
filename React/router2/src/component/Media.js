import React from "react";

const Media = ({ content }) => {
  return (
    <section>
      <h2>제목</h2>
      <div>
        {content.map((res) => {
          // 맵 쓸때는 무조건 return이 들어감
          return (
            <figure key={res.name}>
              <img src={res.url}>
                <figcaption>{res.name}</figcaption>
              </img>
            </figure>
          );
        })}
      </div>
    </section>
  );
};

export default Media;
