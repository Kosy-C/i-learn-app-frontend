import React, { useState, useEffect } from 'react';
import { apiGet } from '../../utils/api/axios';
import './ProgressBar.css'

const ProgressBar = (props:any) => {
  const [width, setWidth] = useState(0);
  const [display, setDisplay] = useState("none");
  const [courses, setCourses] = useState<any>([]);


  useEffect(() => {
    if (props.myProp > 0) {
      setDisplay("block");
      let intervalId = setInterval(() => {
        if (width < props.myProp) {
          setWidth(width + 1);
        } else {
          clearInterval(intervalId);
        }
      });
      return () => clearInterval(intervalId);
    } else {
      setDisplay("none");
    }
  }, [width, props.myProp]);

  return (
    <div className="progress-bar">
      <div
        className="progress"
        style={{ width: `${width}%`, display: display }}
      ></div>
    </div>
  );
}

export default ProgressBar;
