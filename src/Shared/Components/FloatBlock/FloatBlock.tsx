import "./FloatBlock.scss";
import { useState, ReactNode } from "react";
import { Close } from "Shared/Assets/Icons";

import { motion, AnimatePresence } from "framer-motion";

interface IFloatBlock {
  title: string;
  type: "success" | "error" | "info";
  children?: ReactNode;
}


const FloatBlock = ({ title, type = "success", children }: IFloatBlock) => {
  const [componentState, setComponentState] = useState(true);

  return (
    <>
      <AnimatePresence>
        {componentState && (
          <motion.div 
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
          className="Content_Float" data-type={type}>
            <div className="Content_Header Justify_Between Align_Center">
              <b>{title}</b>
              <span
                className="Close_Button"
                style={{ cursor: "pointer" }}
                onClick={() => setComponentState(false)}
              >
                <Close />
              </span>
            </div>
            {children && <div className="Content_Container">{children}</div>}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatBlock;
