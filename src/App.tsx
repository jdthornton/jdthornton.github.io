import React, { useState } from 'react';
import Carousel from '@jdthornton/carousel';
import Menu from './components/Menu';
import PropField, { BoolPropField } from './components/PropField';
import '@jdthornton/carousel/styles.css';
import './App.css';

const initialProps = {
  visibleCount: 3,
  step: 2,
  dark: true,
  isVertical: false,
  autoPlay: false,
  infinite: false,
  showOnFocus: false,
  stopOnFocus: false,
  scrollable: true,
  dotsHide: false,
  arrowsHide: false,
  scrollbarHide: false,
  disableControls: false,
  disableKeyboard: false,
  interval: 3000,
  slides: 10
}

const App = () => {
  const [{slides,visibleCount,step,...state},setState] = useState(initialProps);
  const handleChange = (e: any) => {
    setState((prevState: any) => ({
      ...prevState,
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
    }))
  }

  const slidesArray = Array.from({ length: slides ? slides : 1 }, (_, i) => i+1)
  return(
    <div className="App">
      <Carousel className="App__carousel" {...state} visibleCount={visibleCount ? visibleCount : 1} step={step ? step : 1} >
        {slidesArray.map(slide => <div key={slide} className="slide">{slide}</div>)}
      </Carousel>
      <Menu>
        <PropField name="slides">
          <input type="number" min={1} id="slides" name="slides" value={slides} onChange={handleChange} />
        </PropField>
        <PropField name="visibleCount">
          <input type="number" min={1} id="visibleCount" name="visibleCount" value={visibleCount} onChange={handleChange} />
        </PropField>
        <PropField name="step">
          <input type="number" min={1} id="step" name="step" value={step} onChange={handleChange} />
        </PropField>
        <BoolPropField name="autoPlay" value={state.autoPlay} onChange={handleChange} />
        <PropField name="interval">
          <input type="number" min={1} id="interval" name="interval" value={state.interval} onChange={handleChange} />
        </PropField>
        <BoolPropField name="isVertical" value={state.isVertical} onChange={handleChange} />
        <BoolPropField name="infinite" value={state.infinite} onChange={handleChange} />
        <BoolPropField name="dark" value={state.dark} onChange={handleChange} />
        <BoolPropField name="showOnFocus" value={state.showOnFocus} onChange={handleChange} />
        <BoolPropField name="stopOnFocus" value={state.stopOnFocus} onChange={handleChange} />
        <BoolPropField name="disableControls" value={state.disableControls} onChange={handleChange} />
        <BoolPropField name="disableKeyboard" value={state.disableKeyboard} onChange={handleChange} />
        <BoolPropField name="scrollable" value={state.scrollable} onChange={handleChange} />
        <BoolPropField name="dotsHide" value={state.dotsHide} onChange={handleChange} />
        <BoolPropField name="arrowsHide" value={state.arrowsHide} onChange={handleChange} />
        <BoolPropField name="scrollbarHide" value={state.scrollbarHide} onChange={handleChange} />
      </Menu>
    </div>
  )
}

export default App;
