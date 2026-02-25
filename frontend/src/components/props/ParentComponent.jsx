import React from "react";
import ChildComponent1 from "./ChildComponent1";

const ParentComponent = () => {
  return (
    <div class="border-2 solid red h-[60vh] w-[60vw] flex justify-between ali">
      <ChildComponent1 name="bikram" />
    </div>
  );
};

export default ParentComponent;
