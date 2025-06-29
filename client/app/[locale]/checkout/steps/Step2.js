import ProvinceSelector from "@/components/shared/iranMapSelector/ProvinceSelector";
import React from "react";
import NavigationButton from "@/components/shared/button/NavigationButton";

function Step2({ selectedProvince, handleProvinceSelect, nextStep, prevStep }) {
  return (
    <div className="my-4">

      <div
        className="flex justify-center w-full items-center"
        style={{ fontFamily: "vazir" }}
      >
        <ProvinceSelector
          selectedProvince={selectedProvince}
          onSelect={handleProvinceSelect}
        />
      </div>
    
      <div className="flex justify-between !mt-12 !px-4 ">
        <NavigationButton direction="next" onClick={nextStep} />
        <NavigationButton direction="prev" onClick={prevStep} />
      </div>
    </div>
  );
}

export default Step2;
