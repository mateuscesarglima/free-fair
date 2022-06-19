import React from "react";

const Container = ({ children }) => {
  return (
    <div
      className="container"
      style={{ maxWidth: "1400px", margin: "0 auto", padding: "9.6rem 3.2rem" }}

    >
      {children}
    </div>
  );
};

export default Container;
