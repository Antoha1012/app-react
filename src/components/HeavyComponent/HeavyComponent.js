import React, { useState, useEffect } from "react";
import HeavyComponentItem from "./../HeavyComponentItem/HeavyComponentItem";
import RandomNumber from "./../RandomNumber/RandomNumber";
import styles from "./animation.module.css";

const HeavyComponent = () => {
  const [list, setList] = useState([]);

  const fillWithNums = () => {
    console.time("fill array");
    const nums = [];
    for (let i = 1; i <= 1000; i++) {
      const item = { id: i, value: i };
      nums.push(item);
    }
    console.timeEnd("fill array");
    return nums;
  };

  const handleChange = (e) => {
    switch (e.detail.type) {
      case "increment":
        incrementValue(e.detail.id);
        break;

      case "decrement":
        decrementValue(e.detail.id);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    const numsArray = fillWithNums();
    setList(numsArray);
  }, []);

  useEffect(() => {
    document.addEventListener("changeValue", handleChange);

    return () => document.removeEventListener("changeValue", handleChange);
  }, [list]);

  const incrementValue = (id) => {
    const targetItem = list.find((item) => item.id === id);
    const targetIndex = list.findIndex((item) => item.id === targetItem.id);

    setList((list) => [
      ...list.slice(0, targetIndex),
      { ...targetItem, value: targetItem.value + 1 },
      ...list.slice(targetIndex + 1),
    ]);
  };

  const decrementValue = (id) => {
    const targetItem = list.find((item) => item.id === id);
    const targetIndex = list.findIndex((item) => item.id === targetItem.id);
    setList((list) => [
      ...list.slice(0, targetIndex),
      { ...targetItem, value: targetItem.value - 1 },
      ...list.slice(targetIndex + 1),
    ]);
  };

  return (
    <>
      <div className={styles.walkaboutOldSchool}></div>
      <RandomNumber />
      <ul>
        {list.map((item) => (
          <HeavyComponentItem
            item={item}
            key={item.id}
            // increment={incrementValue}
            // decrement={decrementValue}
          />
        ))}
      </ul>
    </>
  );
};

export default HeavyComponent;
