import { ICheckInput } from "Shared/Utils/Interfaces/Inputs";
import "Shared/Components/Inputs/Inputs.scss";

import { uniqueId } from "lodash";
import { useState, useMemo, useEffect, ChangeEvent } from "react";
import { Circle } from "Shared/Assets/Icons";

const Radio = ({
  label,
  name,
  readonly = false,
  defaultChecked = false,
  style = "Default",
  align = "Flex_Row",
  onChange,
}: ICheckInput) => {
  const defaultValue = useMemo(() => {
    return defaultChecked;
  }, [defaultChecked]);

  const [checked, setChecked] = useState(defaultValue);

  useEffect(() => {
    setChecked(defaultValue);
  }, [defaultValue]);

  const handleCheck = (e:ChangeEvent<HTMLInputElement>) => {
    setChecked(e.currentTarget.checked);
    console.log(e.currentTarget, e.currentTarget.checked, checked);
    try {
      onChange && onChange(e);
    } catch (err) {}
  };

  const inputId = uniqueId("input-radio-");
  return (
    <div className={"InputRadio_Container g-2 " + align + " Style_" + style}>
      <input
        className="InputRadio"
        name={name}
        id={inputId}
        type="radio"
        defaultChecked={defaultChecked}
        disabled={readonly}
        onChange={handleCheck}
      />
      
      {style === 'Switch' ? <Circle /> : null}

      {label ? <label htmlFor={inputId}>{label}</label> : ""}
    </div>
  );
};

export default Radio;
