import { ICheckInput } from "Shared/Utils/Interfaces/Inputs";
import "Shared/Components/Inputs/Inputs.scss";

import { uniqueId } from "lodash";
import { useState, useMemo, useEffect } from "react";
import { Check, Circle } from "Shared/Assets/Icons";

const Checkbox = ({
  label,
  name,
  value,
  readonly = false,
  required = false, 
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

  const handleCheck = () => {
    setChecked(!checked);
    try {
      onChange && onChange();
    } catch (err) {}
  };

  const inputId = uniqueId("input-checkbox-");
  return (
    <div className={"InputCheckbox_Container g-2 " + align + " Style_" + style}>
      <input
        className="InputCheckbox"
        name={name}
        id={inputId}
        type="checkbox"
        checked={checked}
        disabled={readonly}
        onChange={handleCheck}
        required={required}
        {...(value ? { "value": value } : {})}
        style={{
          backgroundImage: `url(${Check.toString()})`
        }}
      />

      {style === 'Switch' ? <Circle /> : null}

      {label ? <label htmlFor={inputId}>{label}</label> : ""}
    </div>
  );
};

export default Checkbox;
