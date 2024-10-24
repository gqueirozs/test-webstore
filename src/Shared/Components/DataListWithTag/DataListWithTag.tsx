import "./DataListWithTag.scss";
import { useState } from "react";
import { InputDataList, SelectionTag } from "Shared/Components";
import { motion, AnimatePresence } from "framer-motion";

import { IDataOption } from "Shared/Utils/Interfaces/Inputs";

const TagDataList = ({ label, name }: { label?: string; name: string }) => {
  const [selectedValues, setSelectedValues] = useState<string[]>(["Categoria 1"]);
  
  const handleChange = (option: IDataOption) => {
    if (!selectedValues?.includes(option.value)) {
      const arr = [...selectedValues, option.value];
      setSelectedValues(arr);
    }
  };

  const deleteValue = (value: string) => {
    const arr = selectedValues.filter((item) => item !== value);
    setSelectedValues(arr);
  };

  return (
    <>
      <InputDataList
        label={label}
        name={name}
        defaultAction={handleChange}
        options={[
          {
            value: "Categoria 1",
          },
          {
            value: "Categoria 2",
          },
          {
            value: "Categoria 3",
          },
          {
            value: "Categoria 4",
          },
          {
            value: "Categoria 5",
          },
        ]}
      />
      <AnimatePresence>
        {selectedValues.length > 0 && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="TagDataList_DefaultContainer"
          >
            {selectedValues.map((value) => (
              <SelectionTag 
                label={value}
                action={() => deleteValue(value)}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TagDataList;
