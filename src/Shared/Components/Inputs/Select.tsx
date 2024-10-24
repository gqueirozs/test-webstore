import { InputText } from "Shared/Components";
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ISelectInput, IDataOption } from "Shared/Utils/Interfaces/Inputs";
import Arrow from "Shared/Assets/Icons/Arrow";
import { uniqueId } from "lodash";

const Select = ({
  label,
  name,
  options,
  defaultAction,
  defaultOption,
  defaultEmpty,
  defaultClear,
  placeholder,
  className = "",
  customName = "",
  alwaysOpen = false,
  defaultMaxOptions = 3,
  required = false,
  readonly = false,
}: ISelectInput) => {
  const inputId = uniqueId("input-select-");
  const [selectedValues, setSelectedValues] = useState<IDataOption[]>();
  const [showList, setShowList] = useState(false);
  const [focusIdx, setFocusIdx] = useState(0);

  const handleOptionClick = (option: IDataOption) => {
    if (!selectedValues) {
      let newValues = [option];
      setSelectedValues(newValues);
    } else if (selectedValues.indexOf(option) == -1) {
      let newValues = [...selectedValues, option];
      setSelectedValues(newValues);
    } else {
      let newValues = selectedValues.splice(selectedValues.indexOf(option), 1);
      setSelectedValues(newValues);
    }
  }

  return (
    <div className={'InputText_Container CustomSelect_Container ' + customName}>
      <select hidden name={name}>
        {
          options.map((option) => (
            <>
              {
                (selectedValues && selectedValues.indexOf(option) != -1) ?
                  <option selected={true} value={option.value}>
                    {option.label || option.value}
                  </option>
                  :
                  <option value={option.value}> {option.label || option.value}</option>
              }
            </>

          ))
        }
      </select>
      <div className="InputText_Holder">
        {label ? <label
          onClick={(e) => {
            if (focusIdx % 2 != 0) setShowList(false)
            else setShowList(true);
          }}
        >{label}</label> : ""}
        <div
          id={inputId}
          tabIndex={0}
          className={`InputText ${className} ${readonly ? '' : 'Not_ReadOnly'}`}
          onClick={(e) => {
            if (focusIdx % 2 != 0) (e.currentTarget as HTMLInputElement).blur()
            setFocusIdx(1);
          }}
          onFocus={(e) => readonly ? null : setShowList(true)}
          onBlur={(e) => setTimeout(() => {
            if (document.activeElement != e.target) setShowList(false)
            setFocusIdx(0);
          }, 150)}
        // name={name}
        // required={required}

        >
          <span>{selectedValues ? selectedValues.map(value => value.label).join(', ') : placeholder}</span>
        </div>

        <AnimatePresence>
          {(showList || alwaysOpen) && (
            <motion.ul
              initial={{
                scaleY: 0,
              }}
              animate={{
                scaleY: 1,
                transformOrigin: "top",
              }}
              exit={{
                scaleY: 0,
              }}
              className="CustomSelect_List"
            >
              {options.map((option, index) => {
                let style: any = {};
                if (option.background) style["background"] = option.background;
                if (option.color) style["color"] = option.color;

                return (
                  <li
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    {...(option.background || option.color
                      ? { style: style }
                      : {})}
                  // className={selectedValues.indexOf(option.value) != -1 ? 'Selected' : ''}
                  >
                    {option.label || option.value}
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      <div className="ArrowSelect_Icon">
        <Arrow />
      </div>
    </div>
  );
};

export default Select;
