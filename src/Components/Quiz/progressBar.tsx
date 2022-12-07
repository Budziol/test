import React from "react";
import "./ProgressBar.styles.scss";

const ProgressBar = ({ completed }: any) => {
  const containerStyles = {
    height: 10,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: "#1e1c7c",
    borderRadius: "inherit",
    transition: "width 100ms ease-in-out",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}> </span>
      </div>
    </div>
  );
};

export default ProgressBar;
