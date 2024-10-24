import { ITextInput } from "Shared/Utils/Interfaces/Inputs";
import "Shared/Components/Inputs/Inputs.scss";
import * as Icons from "Shared/Assets/Icons";
import { useMask, MaskProps } from "@react-input/mask";

import { uniqueId } from "lodash";
import {
  ReactElement,
  useState,
  ChangeEvent,
  KeyboardEvent,
  useMemo,
  useEffect,
} from "react";

const Text = ({
  label,
  type = "text",
  placeholder = "",
  showMax = false,
  max,
  readonly = false,
  value = "",
  name,
  icon,
  iconStyle = "Transparent",
  iconAlign = "Left",
  size = "Full",
  mask,
  className = "",
  error = "",
  required = false,
  children,
  onFocus,
  onBlur,
  onChange,
  onSearch,
  onClick,
  rightAdditional,
  leftAdditional,
}: ITextInput): ReactElement => {
  const defaultValue = useMemo(() => value, [value]);

  let [actualValue, setActualValue] = useState(value || "");

  useEffect(() => {
    setActualValue(defaultValue);
  }, [defaultValue]);

  const IconElement = icon ? Icons[icon] : false;
  const inputId = uniqueId("input-text-");
  const inputRef = useMask(mask);

  const maskToPattern = (maskObj: any) => {
    const { mask, replacement } = maskObj;

    // Substituir os placeholders da máscara pelos equivalentes em expressão regular
    let pattern = mask.replace(/[_\/.]/g, (match: any) => {
      // Se houver uma correspondência com _ no replacement, substituir por \d
      if (match === "_") {
        return "\\d";
      }
      // Se houver uma correspondência com / ou ., escapar a barra ou ponto
      return "\\" + match;
    });

    // Adicionar âncoras para garantir que a expressão corresponda a toda a entrada
    return `^${pattern}$`;
  };

  return (
    <div className={`InputText_Container g-1 Size_${size}`}>
      {label ? <label htmlFor={inputId}>{label}</label> : ""}
      {max && showMax ? (
        <span className="assistant InputChar_Count">
          {actualValue.length}/{max}
        </span>
      ) : (
        ""
      )}
      <div
        className={`InputText_Holder ${
          IconElement ? `Icon_Align_${iconAlign}` : ""
        }`}
        {...(error ? { "data-error": error } : {})}
      >
        {leftAdditional && (
          <span
            className={`InputText_Icon Icon_Align_${iconAlign} Icon_Style_${iconStyle}`}
            {...(onSearch ? { onClick: () => onSearch(actualValue) } : {})}
            style={{ backgroundColor: "#F5F5F5" }}
          >
            {leftAdditional}
          </span>
        )}

        <input
          {...(mask ? { ref: inputRef } : {})}
          {...(mask ? { pattern: maskToPattern(mask) } : {})}
          className={`InputText ${className}`}
          {...(leftAdditional && {
            style: {
              paddingLeft: 56,
            },
          })}
          type={type}
          id={inputId}
          name={name}
          placeholder={placeholder}
          readOnly={readonly}
          defaultValue={actualValue}
          value={actualValue}
          maxLength={max}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setActualValue(e.target.value);
            onChange && onChange(e);
          }}
          required={required}
          {...(onClick ? { onClick: onClick } : {})}
          {...(onFocus ? { onFocus: onFocus } : {})}
          {...(onBlur ? { onBlur: onBlur } : {})}
          {...(onBlur ? { onBlur: onBlur } : {})}
          {...(onSearch
            ? {
                onKeyDown: (e: KeyboardEvent<HTMLInputElement>) =>
                  e.key == "Enter" ? onSearch(actualValue) : null,
              }
            : {})}
        />
        {IconElement ? (
          <span
            className={`InputText_Icon Icon_Align_${iconAlign} Icon_Style_${iconStyle}`}
            {...(onSearch ? { onClick: () => onSearch(actualValue) } : {})}
          >
            <IconElement />
          </span>
        ) : (
          ""
        )}

        {rightAdditional && (
          <span
            className={`InputText_Icon Icon_Align_${iconAlign} Icon_Style_${iconStyle}`}
            {...(onSearch ? { onClick: () => onSearch(actualValue) } : {})}
          >
            {rightAdditional}
          </span>
        )}
      </div>
      {children ? children : null}
    </div>
  );
};

export default Text;
