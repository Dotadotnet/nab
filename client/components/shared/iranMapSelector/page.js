"use client";
import { useState } from "react";
import { IranMap } from "react-iran-map";
import {defaultData}  from "@/data/defaultData";
import { IranProvincesMap } from "react-iran-provinces-map";

const IranMapSelector = ({ selectedArea, onSelect }) => {
  const [selectedProvince, setSelectedProvince] = useState(
    selectedArea || "tehran"
  );
console.log("defaultData", defaultData);
  const mapIranData = {
    ardabil: 10,
    isfahan: 20,
    alborz: 11,
    ilam: 18,
    eastAzerbaijan: 10,
    westAzerbaijan: 20,
    bushehr: 15,
    tehran: 3,
    chaharmahalandBakhtiari: 25,
    southKhorasan: 29,
    razaviKhorasan: 11,
    northKhorasan: 19,
    khuzestan: 12,
    zanjan: 18,
    semnan: 9,
    sistanAndBaluchestan: 3,
    fars: 7,
    qazvin: 35,
    qom: 30,
    kurdistan: 24,
    kerman: 23,
    kohgiluyehAndBoyerAhmad: 2,
    kermanshah: 7,
    golestan: 18,
    gilan: 14,
    lorestan: 7,
    mazandaran: 28,
    markazi: 25,
    hormozgan: 14,
    hamadan: 19,
    yazd: 32
  };

console.log("mapIranData", mapIranData);

  const selectProvinceHandler = (province) => {
    console.log(province);
    setSelectedProvince(province?.name);
  };
  const selectCityHandler = (city) => {
    console.log(city);
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-y-4">
      <div style={{ fontFamily: "vazir" }}>
        <IranMap
          data={mapIranData}
          selectedArea={selectedArea}
          renderTooltip={true}
          colorRange="30, 70, 181"
          textColor="#000"
          defaultSelectedProvince="tehran"
          deactiveProvinceColor="#eee"
          selectedProvinceColor="#3bcc6d"
          tooltipTitle="تعداد:"
          selectProvinceHandler={selectProvinceHandler}
        />
      </div>
      <div style={{ fontFamily: "vazir" }}>
        <IranProvincesMap
          province={selectedProvince}
          provinceData={defaultData}
          colorRange="30, 70, 181"
          deactiveProvinceColor="#eee"
          selectedProvinceColor="#3bcc6d"
          tooltipTitle="تعداد:"
          textColor="#000"
          selectProvinceHandler={selectCityHandler}
        />
      </div>
    </div>
  );
};

export default IranMapSelector;
