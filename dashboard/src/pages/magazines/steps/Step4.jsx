import React from "react";
import NavigationButton from "@/components/shared/button/NavigationButton";
import Plus from "@/components/icons/Plus";
import Minus from "@/components/icons/Minus";

const Step4 = ({ whatYouWillLearn, setWhatYouWillLearn, nextStep, prevStep }) => {
  const addLearnItem = () => {
    setWhatYouWillLearn([...whatYouWillLearn, ""]);
  };

  const removeLearnItem = (index) => {
    const newItems = [...whatYouWillLearn];
    newItems.splice(index, 1);
    setWhatYouWillLearn(newItems);
  };

  const handleLearnItemChange = (index, value) => {
    const newItems = [...whatYouWillLearn];
    newItems[index] = value;
    setWhatYouWillLearn(newItems);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <h2 className="text-xl font-bold text-center">آنچه در این فصل خواهید خواند</h2>
      
      <div className="flex flex-col gap-y-3">
        {whatYouWillLearn.map((item, index) => (
          <div key={index} className="flex items-center gap-x-2">
            <input
              type="text"
              value={item}
              onChange={(e) => handleLearnItemChange(index, e.target.value)}
              placeholder={`مورد ${index + 1}`}
              className="p-2 rounded border w-full"
            />
            <button
              type="button"
              onClick={() => removeLearnItem(index)}
              className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              <Minus size={16} />
            </button>
          </div>
        ))}
        
        <button
          type="button"
          onClick={addLearnItem}
          className="flex items-center justify-center gap-x-2 p-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          <Plus size={16} />
          <span>افزودن مورد</span>
        </button>
      </div>

      <div className="flex justify-between mt-8">
        <NavigationButton direction="next" onClick={nextStep} />
        <NavigationButton direction="prev" onClick={prevStep} />
      </div>
    </div>
  );
};

export default Step4;