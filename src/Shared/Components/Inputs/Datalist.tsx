import { InputText } from "Shared/Components";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IDataList, IDataOption } from "Shared/Utils/Interfaces/Inputs";
import Arrow from "Shared/Assets/Icons/Arrow";

const DataList = ({
  label,
  name,
  placeholder,
  iconAlign,
  iconStyle,
  icon,
  options,
  defaultAction,
  defaultOption,
  customName = '',
  className = '',
  alwaysOpen = false,
  defaultClear = true,
}: IDataList) => {
  const defaultValue =
    defaultOption && options.length > defaultOption
      ? options[defaultOption].value
      : "";
  const [inputValue, setInputValue] = useState(defaultValue);
  const [showList, setShowList] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.value.toLowerCase().includes(inputValue.toLowerCase())
  );

  const handleOptionClick = (option: IDataOption) => {
    if (!option.clear && !defaultClear) setInputValue(option.value);
    setShowList(false);
    defaultAction?.(option);
    option.action?.(option);
  };

  return (
    <div  className={'InputDataList_Container ' + customName}>
      <InputText
        label={label}
        className={className}
        name={name}
        placeholder={placeholder}
        iconAlign={iconAlign}
        iconStyle={iconStyle}
        icon={icon}
        value={inputValue}
        onFocus={() => setShowList(true)}
        onBlur={() => setTimeout(() => setShowList(false), 150)}
        onChange={(e) => setInputValue(e.target.value)}
      >
        <div className="ArrowSelect_Icon">
          <Arrow />
        </div>
      </InputText>
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
            className="InputDataList_List"
          >
            {filteredOptions.map((option, index) => {
              let style: any = {};
              if (option.background) style["background"] = option.background;
              if (option.color) style["color"] = option.background;

              return (
                <li
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  {...(option.background || option.color
                    ? { style: style }
                    : {})}
                >
                  {option.value}
                </li>
              );
            })}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DataList;
