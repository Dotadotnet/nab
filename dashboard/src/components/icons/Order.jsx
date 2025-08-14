

import React from "react";

const Order =({className,...props }) => {
  return (
    <svg {...props}
    className={"w-5 h-5" + (className ? " " + className : "")}
 xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 16 16"><path fill="none" stroke="currentColor" strokeLinejoin="round" d="M6.5 14.5h-3v-13h9V7M5 4.5h6m-6 2h4m1.5 3v2L12 13m1.5-1.5a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" strokeWidth={1}></path></svg>
  );
};

export default Order;
