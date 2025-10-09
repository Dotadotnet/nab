import React from "react";
import DetailCard from "./DetailCard";
import EditableField from "../shared/EditableField";
import EditableFeatures from "../shared/EditableFeatures";

const Description = ({ product, onFieldUpdate, onFeaturesUpdate }) => {

  return (
    <section className="flex flex-col gap-y-2.5">
      <div className="flex flex-row gap-x-2 items-center">
        <span className="whitespace-nowrap text-sm text-black">
          جزئیات این محصول
        </span>
        <hr className="w-full" />
      </div>
      <article className="flex flex-col gap-y-4">
        <EditableField
          value={product?.summary}
          field="summary"
          onUpdate={onFieldUpdate}
          multiline={true}
          placeholder="خلاصه محصول..."
          className="text-sm"
        />
        <button className="px-8 py-2 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit flex flex-row gap-x-2 items-center">
          نظرات
        </button>
        <div className="flex flex-row gap-x-2 items-center">
          <span className="whitespace-nowrap text-sm text-black">
            ویزگی های این محصول{" "}
          </span>
          <hr className="w-full" />
        </div>
        <EditableFeatures
          features={product?.features || []}
          onUpdate={onFeaturesUpdate}
        />
      </article>
    </section>
  );
};

export default Description;
