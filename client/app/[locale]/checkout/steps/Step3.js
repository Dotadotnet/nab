import CityMapViewer from "@/components/shared/iranMapSelector/CityMapViewer";
import React from "react";
import NavigationButton from "@/components/shared/button/NavigationButton";

function Step3({ selectedProvince, handleCitySelect, nextStep, prevStep }) {
  return (
    <div className="my-4">
      <div
        className="flex justify-center w-full items-center"
        style={{ fontFamily: "vazir" }}
      >
        <CityMapViewer
          selectedProvince={selectedProvince}
          onSelectCity={handleCitySelect}
        />
      </div>

      <div className="flex justify-between !mt-12 !px-4 ">
        <NavigationButton direction="next" onClick={nextStep} />
        <NavigationButton direction="prev" onClick={prevStep} />
      </div>
    </div>
  );
}

export default Step3;
