import React from "react";
import ReactDOM from "react-dom";
import src from "./Group.png";
import "./styles.css";
import { useState } from "react";

function App() {
  const [Data, setAnimaton] = useState({
    active: false,
    overlay: false,
    slide: false
  });

  const scaleToggle = () => {
    setAnimaton({ active: !Data.active });
  };

  const changeSlide = () => {
    setAnimaton({ active: !Data.active });
    setTimeout(() => {
      setAnimaton({ slide: !Data.active });
    }, 1000);
  };

  const clear = () => {
    setAnimaton({
      active: false,
      overlay: false,
      slide: false
    });
  };

  return (
    <div className="App">
      <aside className="aside">

        <button className="btn" onClick={scaleToggle}>
        Scale
        </button>
      </aside>
      <div className="wrapper">
        <div className="image-container">
          <img src={src} className={Data.active ? "img img-active" : "img"} />
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
