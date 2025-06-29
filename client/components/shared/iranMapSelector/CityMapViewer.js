"use client";
import { IranProvincesMap } from "react-iran-provinces-map";
import { defaultData } from "@/data/defaultData";

const CityMapViewer = ({ selectedProvince, onSelectCity }) => {
  return (
    <IranProvincesMap
      province={selectedProvince}
      provinceData={defaultData}
      selectProvinceHandler={onSelectCity}
      colorRange="30, 70, 181"
      deactiveProvinceColor="#eee"
      selectedProvinceColor="#3bcc6d"
      tooltipTitle="تعداد:"
      textColor="#000"
    />
  );
};

export default CityMapViewer;
