import { IRangeInput } from "Shared/Utils/Interfaces/Inputs";
import { useEffect } from "react";

import { uniqueId } from "lodash";

const Range = ({ name, min = 1, max, label, value = 1 }: IRangeInput) => {
  const inputId = uniqueId("input-range-");
  if (min) value = min;

  const handleInput = (
    inputElement: HTMLInputElement,
    rangeDisplay: HTMLElement
  ) => {
    const value = parseFloat(inputElement.value);

    const totalWidth = inputElement.offsetWidth - 16;
    const offset = ((totalWidth / (max-min)) * value) - ((totalWidth / max) * min)

    const percentage = ((value - min) / (max - min)) * 100;
    const style = `linear-gradient(to right, #1974D0 0%, #1974D0 ${percentage}%, #ddd ${percentage}%, #ddd 100%)`;

    inputElement.style.background = style;
    rangeDisplay.textContent = value.toString();
    rangeDisplay.style.left = `${offset}px`;
  };

  const setHandleInput = () => {
    const inputElement = document.getElementById(inputId) as HTMLInputElement;
    const rangeDisplay = document.querySelector(
      `[data-range="${inputId}"]`
    ) as HTMLElement;

    if (!inputElement || !rangeDisplay) return;

    handleInput(inputElement, rangeDisplay);
    inputElement.addEventListener("input", () =>
      handleInput(inputElement, rangeDisplay)
    );
  };

  useEffect(setHandleInput, []);

  return (
    <div className="InputRange_Container">
      <label htmlFor={inputId}>{label}</label>

      <input
        defaultValue={value}
        className='InputRange'
        type="range"
        id={inputId}
        name={name}
        min={min}
        max={max}
      ></input>

      <span className="InputRange_Value" data-range={inputId}></span>
    </div>
  );
};

export default Range;
