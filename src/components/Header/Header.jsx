import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "inline-flex" }}>
      <Link style={{ marginLeft: "20px", marginRight: "20px" }} to={"/"}>
        Home
      </Link>
      <Link style={{ marginLeft: "20px", marginRight: "20px" }} to={"/posts"}>
        Posts
      </Link>
      <Link
        style={{ marginLeft: "20px", marginRight: "20px" }}
        to={"/heavycomponent"}
      >
        Heavy component
      </Link>
    </div>
  );
};

export default Header;
