import React, { memo, useEffect } from "react";
import { Button } from "@material-ui/core";

const HeavyComponentItem = ({ item, increment, decrement }) => {
  const { id, value } = item;

  useEffect(() => {
    console.log("render heavy component item");
  });

  return (
    <div style={{ borderBottom: "1px solid black", marginBottom: "5px" }}>
      <div>id: {id}</div>
      <div>value: {value}</div>
      <div style={{ display: "flex" }}>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            // increment(id);
            const newEv = new CustomEvent("changeValue", {
              detail: { id, type: "increment" },
            });
            document.dispatchEvent(newEv);
          }}
        >
          increment
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            // decrement(id);
            const newEv = new CustomEvent("changeValue", {
              detail: { id, type: "decrement" },
            });
            document.dispatchEvent(newEv);
          }}
        >
          decrement
        </Button>
      </div>
    </div>
  );
};

export default memo(HeavyComponentItem);
