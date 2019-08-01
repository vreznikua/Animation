import React from "react";
import ReactDOM from "react-dom";
import websiteSrc from "./images/website.png";
import website2Src from "./images/website2.jpg";
import "./styles.scss";
import { useState } from "react";
import classNames from "classnames"
import SvgComponent from './svg'

function App() {
  
  const createCanvasWindow = () => {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d');
  }

  createCanvasWindow()

  return (
    <div className="wizard">
      <aside className="wizard__aside">
        <div className="wizard__form">
          <button className="btn btn-abs"> CLEAR STATE</button>
          <button className="btn btn-abs btn-abs-l">Start animation</button>
          <div className="btn-mb">
            <button className="btn">Hide image</button>
            <button className="btn">Prepare</button>
            <button className="btn">Show Second</button>
            <button className="btn">End</button>
          </div>
          <button className="btn btn-mb">Change slide</button>
          <button className="btn btn-mb">Scale image</button>
          <button className="btn btn-mb">Show Domain Mask</button>
          <button className="btn">Change Domain text</button>
        </div>
      </aside>
      <main className="wizard__main">
        <div className="slider">
          <div id="canvas"/>
        </div>
      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
