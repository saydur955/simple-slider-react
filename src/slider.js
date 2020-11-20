import React, {useState, useEffect, useRef} from 'react';
import './slider.scss';

const Slider = ({users}) => {

  const [count, setCount] = useState(0);
  const refSlide = useRef();

  useEffect(()=> {
    const extraWidth = 1.75 * count;
    const itemWidth = refSlide.current.children[0].clientWidth;
    refSlide.current.style.transform = `translateX(${itemWidth*count + extraWidth}px)`;
  }, [count])

  const slides = () => (
    users.map(el => {
      return (
        <div key={el.id} className="slideItem">
          <h2> {el.id} </h2>
          <h3> {el.title} </h3>
        </div>
      )
    })
  );

  const prevButtonHandler = () => {
    if(count<0){
      setCount(count+1);
    }
  }

  const nextButtonHandler = () => {
    const maxCount = -users.length;
    if(count>maxCount+2){
      setCount(count-1);
    }
  }


  return (
    <div className="slider">
      <div className="visibleSlider">
        <div ref={refSlide} className="slideContainer">
          {slides()}
        </div>
      </div>
      <button onClick={prevButtonHandler}> prev </button>
      <button onClick={nextButtonHandler}> next </button>
    </div>
  )
};
export default Slider;