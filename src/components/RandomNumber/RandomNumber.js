import React, { useState, useEffect, useRef, memo } from "react";
import RandomNumberItem from "./../RandomNumberItem/RandomNumberItem";

const RandomNumber = () => {
  const [values, setValues] = useState([]);
  const promiseTimer = useRef();

  const asyncItem = (i) => {
    return new Promise((resolve) => {
      promiseTimer.current = setTimeout(() => resolve(i), 0);
    });
  };

  const infiniteNums = async (startValue) => {
    let buffer = [];

    for (let i = startValue; i < startValue + 100; i++) {
      const item = await asyncItem(i);
      buffer = [...buffer, item];
    }

    setValues(() => [...values, ...buffer]);
  };

  useEffect(() => {
    if (values.length < 1e9) {
      infiniteNums(values.length);
    }
  }, [values]);

  useEffect(() => {
    infiniteNums(values.length);

    return () => {
      clearTimeout(promiseTimer.current);
    };
  }, []);

  return (
    <ul
      style={{
        float: "left",
        width: "100px",
        overflowY: "auto",
        height: "300px",
        marginRight: "40px",
        padding: "5px",
      }}
    >
      {values.map((val) => (
        <RandomNumberItem value={val} key={val} />
      ))}
    </ul>
  );
};

export default memo(RandomNumber);
