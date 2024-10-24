import { IRangeInput } from "Shared/Utils/Interfaces/Inputs";
import { useEffect } from "react";

import { uniqueId } from "lodash";

const MultipleRange = ({
  name,
  min = 0,
  max,
  label,
  minDistance = 1,
  maxDistance,
  value = 0
}: IRangeInput) => {
  value = value >= min ? value : min;

  const inputId = uniqueId("input-multirange-");
  const inputId_2 = uniqueId("input-multirange-2-");

  const handleRangeSelect = (event?: React.FormEvent<HTMLInputElement>) => {
    const element = document.getElementById(inputId) as HTMLInputElement;
    const element_2 = document.getElementById(inputId_2) as HTMLInputElement;
    const rangeDisplay = document.querySelector(
      `[data-range="${inputId}"]`
    ) as HTMLElement;
    const rangeDisplay_2 = document.querySelector(
      `[data-range="${inputId_2}"]`
    ) as HTMLElement;

    let value1 = parseInt(element.value),
      value2 = parseInt(element_2.value);

    if (event) {
      const activeElementId = (event.target as HTMLInputElement).id;

      if (activeElementId === inputId) {
        if (value1 >= value2 - minDistance) {
          element.value = (value2 - minDistance).toString();
          value1 = parseInt(element.value);
        }
      } else {
        if (value2 <= value1 + minDistance) {
          element_2.value = (value1 + minDistance).toString();
          value2 = parseInt(element_2.value);
        }
      }
    }

    const minBetween = Math.min(value1, value2);
    const maxBetween = Math.max(value1, value2);

    const totalWidth = element.offsetWidth - 16;
    const offset1 = ((totalWidth / (max-min)) * value1) - ((totalWidth / max) * min)
    const offset2 = ((totalWidth / (max-min)) * value2) - ((totalWidth / max) * min)

    const gradient = `linear-gradient(to right, #CCCCCC 0%, #CCCCCC ${minBetween}%, #1974D0 ${minBetween}%, #1974D0 ${maxBetween}%, #CCCCCC ${maxBetween}%, #CCCCCC 100%)`;

    element.style.background = gradient;
    rangeDisplay.textContent = value1.toString();
    rangeDisplay.style.left = `${offset1}px`; // Adicionado o -16px
    rangeDisplay_2.textContent = value2.toString();
    rangeDisplay_2.style.left = `${offset2}px`; // Adicionado o -16px
    return;
  };

  useEffect(handleRangeSelect, []);

  return (
    <>
      <div className="InputRange_Container">
        <label htmlFor={inputId}>{label}</label>

        <input
          defaultValue={value}
          className='InputMultiRange'
          type="range"
          id={inputId}
          name={name + "min"}
          min={min}
          max={max}
          onInput={handleRangeSelect}
        ></input>
        <input
          defaultValue={maxDistance ? value + maxDistance : value + max}
          className='InputMultiRange'
          type="range"
          id={inputId_2}
          name={name + "max"}
          min={min}
          max={max}
          onInput={handleRangeSelect}
        ></input>

        <span className="InputRange_Value" data-range={inputId}></span>
        <span className="InputRange_Value" data-range={inputId_2}></span>
      </div>
    </>
  );
};

export default MultipleRange;
