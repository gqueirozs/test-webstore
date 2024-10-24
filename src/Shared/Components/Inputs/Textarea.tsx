import { useState } from "react";
import "Shared/Components/Inputs/Inputs.scss";
import { ITextInput } from "Shared/Utils/Interfaces/Inputs";

import * as Icons from "Shared/Assets/Icons";

import { uniqueId } from "lodash";

const TextArea = ({
  label,
  placeholder = "",
  max,
  readonly = false,
  value,
  name,
  icon,
  iconStyle = "Transparent",
  iconAlign = "Left",
  size = "Full",
  className = "",
  error = "",
  maxRows = 5
}: ITextInput) => {
  const [rows, setRows] = useState(3);
  const IconElement = icon ? Icons[icon] : false;
  const inputId = uniqueId("input-text-");
  
  return (
    <div className={`InputText_Container g-1 Size_${size}`}>
      {label ? <label htmlFor={inputId}>{label}</label> : ""}
      {max ? <span className="assistant InputChar_Count">0/{max}</span> : ""}
      <div
        className={`InputText_Holder ${
          IconElement ? `Icon_Align_${iconAlign}` : ""
        }`}
        {...(error ? { "data-error": error } : {})}
      >
        <textarea
          className={`InputText ${className}`}
          id={inputId}
          name={name}
          placeholder={placeholder}
          readOnly={readonly}
          value={value}
          style={{ height: (rows*25)+30 + 'px' }}
          onFocus={() => setRows(maxRows)}
          onBlur={() => setRows(3)}
        />

        {IconElement ? (
          <span
            className={`InputText_Icon Icon_Align_${iconAlign} Icon_Style_${iconStyle}`}
          >
            <IconElement />
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default TextArea;
