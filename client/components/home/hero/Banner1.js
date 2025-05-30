import React from "react";
import Right from "./Right";
import Left from "./Left";

const Banner1 = ({options}) => {
  return (
    <div className="grid md:grid-cols-3   justify-center grid-cols-1 gap-y-2 md:gap-4 ">
      <Right options={options} />
       <Left /> 
    </div>
  );
};

export default Banner1;
