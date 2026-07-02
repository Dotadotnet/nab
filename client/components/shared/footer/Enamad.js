import React from "react";
import Image from "next/image";

const Enamad = () => {
  return (
    <a
      href="https://trustseal.enamad.ir/?id=580706&Code=XHwSs5WGyIbhmLwNNOR9ukbjKAcL8iOO"
      referrerPolicy="origin"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/enamad.png"
        alt="enamad"
        width={125}
        height={136}
        className="cursor-pointer"
      />
    </a>
  );
};

export default Enamad;
