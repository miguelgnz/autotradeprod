import React, {useState, useEffect} from 'react'

import classes from './Slide.module.css'

const Slide = (props) => {
    const [current, setCurrent] = useState(0);
    const length = props.slides.length;

    useEffect(() => {
        const interval = setInterval(() => {

        setCurrent((prev) => {
            return prev + 1 === length ? 0 : prev + 1
        });
        }, 3000);
        return () => clearInterval(interval);
    },[length]);

  return (
      <>
          {props.slides.map((slide, index) => {
              return (
                    <div
                    key={index}
                    className={
                        index === current
                        ? `${classes.slide} ${classes.active}`
                        : `${classes.slide}`
                    }
                    >
                    {index === current && (
                        <>
                            <img src={slide.image} alt='slide' className={classes.sliderImg} />
                            <div className={classes.titleContainer}>
                                <h1>
                                    {slide.text}
                                </h1>
                            </div>
                        </>

                    )}
                    </div>
              );
            })}
      </>
  )
}

export default Slide