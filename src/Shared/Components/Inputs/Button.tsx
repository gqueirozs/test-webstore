import React from "react";
import { IButton } from "Shared/Utils/Interfaces/Buttons";
import ButtonObj from "Shared/Utils/Data/Button";

import * as Icons from "Shared/Assets/Icons";

const Button = ({
  icon = true,
  label = true,
  className = "Flex_Row",
  type,
  children,
  onClick,
  disabled = false,
}: IButton) => {
  const IconElement = Icons[ButtonObj[type].Icon];
  const labelToUse = ButtonObj[type].Label;

  return (
    <button
      className={`Button Button_Style_${type} ${className}`}
      {...(onClick ? { "onClick": onClick } : {})}
      disabled={disabled}
    >
      {children ? (
        children
      ) : (
        <>
          {icon ? <IconElement /> : null}
          {label ? labelToUse : null}
        </>
      )}
    </button>
  );
};

export default Button;
