import { memo } from "react";

const RandomNumberItem = ({ value }) => {
  return <li>{value}</li>;
};

export default memo(RandomNumberItem);
