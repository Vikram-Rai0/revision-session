import React from "react";
import ChildComponent2 from "./ChildComponent2";
const ChildComponent1 = ({ name }) => {
  return (
    <div  class="border-2 solid red h-[40vh] w-[40vw]">
      <h1>Hello {name}</h1>
      <ChildComponent2 name="binod" />
    </div>
  );
};

export default ChildComponent1;
