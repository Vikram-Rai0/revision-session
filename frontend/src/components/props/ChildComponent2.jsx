import React from "react";
import ChildComponent3 from "./ChildComponent3";
const ChildComponent2 = ({name}) => {
  return (
    <div class = "border-2 solid red h-[30vh] w-[30vw]">
      <h1>my Brother name is {name} </h1>
      <ChildComponent3/>
    </div>
  );
};

export default ChildComponent2;
