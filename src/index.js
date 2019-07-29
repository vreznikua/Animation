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
    inputText: 'https://weblium.com',
    focusedInput: false,
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
      hideImage: false,
      slideSecond: false,
      prepareSecond: false,
      showSecondImage: false,
      changeText: false,
      showDomain: false,
      inputText: 'https://weblium.com',
      focusedInput: false,
    });
  };

  const startSlideShow = () => {
    hideImage()
    setTimeout(function() {
      changeSlide()    
  }, 525); 
    setTimeout(function() {
      prepareSecond() 
  }, 500);
  }
  
  const handleInputChange = (event) => {
    setAnimaton({...StepsAnimation, inputText: event.target.value, focusedInput: true}) 
  }

  const onFocus = () => {
    setAnimaton({...StepsAnimation, focusedInput: true}) 
  }

  const onBlur = () => {
    setAnimaton({...StepsAnimation, focusedInput: false}) 
  }

  return (
    <div className="wizard">
      <aside className="wizard__aside">
        <div className="wizard__form">
          <button className="btn btn-abs" onClick={clearState}> CLEAR STATE</button>
          <button className="btn btn-abs btn-abs-l" onClick={startSlideShow}>Start animation</button>
          <div className="btn-mb">
            <button className="btn" onClick={hideImage}>Hide image</button>
            <button className="btn" onClick={prepareSecond}>Prepare</button>
            <button className="btn" onClick={showSecondImage}>Show Second</button>
            <button className="btn" onClick={endChageSlidesScene}>End</button>
          </div>
          <button className="btn btn-mb" onClick={changeSlide}>Change slide</button>
          <button className="btn btn-mb" onClick={scaleToggle}>Scale image</button>
          <button className="btn btn-mb" onClick={showDomainMask}>Show Domain Mask</button>
          <button className="btn btn-mb" onClick={changeDomainText}>Change Domain text</button>
          <input
            className="input"
            type="text" 
            value={StepsAnimation.inputText}
            onChange={ e => handleInputChange(e)}
            onBlur={onFocus}
            onFocus={onBlur}
          />
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
              <div className={classNames(
                "slider__text-domain",
                {[`slider__text-domain--active`]: StepsAnimation.focusedInput},
              )}>
                {StepsAnimation.inputText}
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
              <div className={classNames(
                "slider__text-domain",
                {[`slider__text-domain--active`]: StepsAnimation.focusedInput},
              )}>
                {StepsAnimation.inputText}
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
