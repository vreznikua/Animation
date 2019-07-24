import React from "react";
import ReactDOM from "react-dom";
import websiteSrc from "./images/website.png";
import website2Src from "./images/website2.jpg";
import "./styles.scss";
import { useState } from "react";
import classNames from "classnames"
import SvgComponent from './svg'

function App() {
  const [StepsAnimation, setAnimaton] = useState({
    scale: false,
    hideImage: false,
    slideSecond: false,
    prepareSecond: false,
    showSecondImage: false,
    changeText: false,
    showDomain: false,
  });

  const scaleToggle = () => {
    setAnimaton({...StepsAnimation, scale: !StepsAnimation.scale });
  };

  const hideImage = () => {
    setAnimaton({...StepsAnimation, hideImage: !StepsAnimation.hideImage});
  };

  const prepareSecond = () => {
    setAnimaton({...StepsAnimation, prepareSecond: !StepsAnimation.prepareSecond});
  };

  const showSecondImage = () => {
    setAnimaton({...StepsAnimation, showSecondImage: !StepsAnimation.showSecondImage});
  };

  const changeSlide = () => {
    setAnimaton({...StepsAnimation,  slideSecond: !StepsAnimation.slideSecond});
  };

  const showDomainMask = () => {
    setAnimaton({...StepsAnimation,  showDomain: !StepsAnimation. showDomain});
  };

  const changeDomainText = () => {
    setAnimaton({...StepsAnimation,  changeText: !StepsAnimation. changeText});
  };

  const endChageSlidesScene = () => {
    setAnimaton({...StepsAnimation, hideImage: false, prepareSecond:false,showSecondImage:false });
  };


  const clearState = () => {
    setAnimaton({
      scale: false,
      slideSecond: false,
      changeText: false,
      showDomain: false,
    });
  };

  return (
    <div className="wizard">
      <aside className="wizard__aside">
        <div className="wizard__form">
          <button className="btn btn-abs btn-mb" onClick={clearState}> CLEAR STATE</button>
          <div className="btn-mb">
            <button className="btn" onClick={hideImage}>Hide image</button>
            <button className="btn" onClick={prepareSecond}>Prepare</button>
            <button className="btn" onClick={showSecondImage}>Show Second</button>
            <button className="btn" onClick={endChageSlidesScene}>End</button>
          </div>
          <button className="btn btn-mb" onClick={changeSlide}>Change slide</button>
          <button className="btn btn-mb" onClick={scaleToggle}>Scale image</button>
          <button className="btn btn-mb" onClick={showDomainMask}>Show Domain Mask</button>
          <button className="btn" onClick={changeDomainText}>Change Domain text</button>
        </div>
      </aside>
      <main className="wizard__main">
        <div className="slider">
          <div className={
            classNames(
              "slider__slides",
              {[`slider__slides--hide`]: StepsAnimation.hideImage},
              {[`slider__slides--prepare`]: StepsAnimation.prepareSecond},
              {[`slider__slides--show-second`]: StepsAnimation.showSecondImage},
            )
          }>
            <div
              className={
                classNames(
                  "slider__item",
                  {[`slider__item--active`]: !StepsAnimation.slideSecond},
                  {[`slider__item--scale`]: StepsAnimation.scale},
                  {[`slider__item--translate`]: StepsAnimation.hideImage},
                  {[`slider__item--prepare`]: StepsAnimation.prepareSecond},
                  {[`slider__item--show-second`]: StepsAnimation.showSecondImage},
                  )
              }>
              <SvgComponent />
              <img src={websiteSrc} className="image" />
              <div className="slider__text-domain">
                {StepsAnimation.changeText ? 'https://gooooooooooogle.com' : 'https://app.weblium.com'}
              </div>
            </div>
            <div
              className={
                classNames(
                  "slider__item",
                  {[`slider__item--active`]: StepsAnimation.slideSecond},
                  {[`slider__item--scale`]: StepsAnimation.scale},
                  {[`slider__item--translate`]: StepsAnimation.hideImage},
                  {[`slider__item--prepare`]: StepsAnimation.prepareSecond},
                  {[`slider__item--show-second`]: StepsAnimation.showSecondImage},
                  )
              }>
              <SvgComponent/>
              <img src={website2Src} className="image" />
              <div className="slider__text-domain">
                {StepsAnimation.changeText ? 'https://gooooooooooogle.com' : 'https://app.weblium.com'}
              </div>
            </div>
          </div>
          <div className={classNames("slider__domain", {[`slider__domain--show`]: StepsAnimation.showDomain && StepsAnimation.scale})}/>
        </div>
      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
