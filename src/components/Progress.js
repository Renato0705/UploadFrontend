import React, { useRef, useEffect, useState } from "react";
import {  Progress } from 'antd';
 
export default function Demo () {

  const [num, setNum] = useState(1);  
  let intervalRef = useRef();  
  const decreaseNum = () => setNum((prev) => prev + 1);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseNum, 600);
    return () => clearInterval(intervalRef.current);
  }, []); 
 

    return(
    <>
     {num < 600 &&
      <Progress
        type="circle"
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
        percent={num}
      />}
    </>
    )
};
