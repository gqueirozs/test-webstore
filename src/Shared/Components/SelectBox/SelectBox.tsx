import "./SelectBox.scss";
import { InputSelect } from "Shared/Components";
import { useState, useEffect } from "react";
import { Arrow } from "Shared/Assets/Icons";

import { IDataOption } from "Shared/Utils/Interfaces/Inputs";

const optionsArr: Array<IDataOption> = [
  {
    value: "Selecione1",
  },
  {
    value: "Selecione2",
  },
  {
    value: "Selecione3",
  },
  {
    value: "Selecione4",
  },
  {
    value: "Selecione5",
  },
];


const SelectBox = () => {
  const [focused1, setFocused1] = useState<Array<IDataOption>>([]);
  const [focused2, setFocused2] = useState<Array<IDataOption>>([]);
  const [focusedIdx1, setFocusedIdx1] = useState<Array<number>>([]);
  const [focusedIdx2, setFocusedIdx2] = useState<Array<number>>([]);
  const [nonSelected, setNomSelected] = useState<Array<IDataOption>>(optionsArr);
  const [selected, setSelected] = useState<Array<IDataOption>>([]);

  useEffect(() => {
    setNomSelected(optionsArr.filter(item => selected.map(s => s.value).indexOf(item.value) === -1));
  }, [selected])

  return (
    <div className="SelectBox_Container">
      <InputSelect
        customName="SelectAlwaysOpen"
        name="Library3"
        label="Múltipla escolha"
        defaultAction={(v) => {
          const valueIdx = focused1.map((item) => item.value).indexOf(v.value);
          if (valueIdx == -1) {
            setFocusedIdx1((prevFocusedIdx) => [...prevFocusedIdx, valueIdx])
            setFocused1((prevFocused) => [...prevFocused, v]);
          } else {
            const newArr = [...focused1];
            newArr.splice(valueIdx, 1);
            setFocused1(newArr);

            const otherNewArr = [...focusedIdx1];
            otherNewArr.splice(focusedIdx1.indexOf(valueIdx), 1);
            setFocusedIdx1(otherNewArr);
          }
        }}
        defaultMaxOptions={nonSelected.length}
        defaultClear={false}
        alwaysOpen={true}
        options={nonSelected}
      />

      <span className="Flex_Column g-6">
        <span
          style={{
            transform: 'rotate(90deg)'
          }}
          onClick={() => {
            const newArray = [...selected.filter(item => focused2.map(s => s.value).indexOf(item.value) == -1)];
            setSelected(newArray);
            setFocused1([])
            setFocused2([])
          }}
        >
          <Arrow />
        </span>

        <span
          style={{
            transform: 'rotate(-90deg)'
          }}
          onClick={() => {
            const newArray = [...selected, ...focused1.filter(item => selected.map(s => s.value).indexOf(item.value) == -1)];
            setSelected(newArray);
            setFocused1([])
            setFocused2([])
          }}
        >
          <Arrow />
        </span>

      </span>



      <InputSelect
        customName="SelectAlwaysOpen"
        name="Library2"
        label="Múltipla escolha"
        defaultAction={(v) => {
          const valueIdx = focused2.map((item) => item.value).indexOf(v.value);
          if (valueIdx == -1) {
            setFocusedIdx2((prevFocusedIdx) => [...prevFocusedIdx, valueIdx])
            setFocused2((prevFocused) => [...prevFocused, v]);
          } else {
            const newArr = [...focused1];
            newArr.splice(valueIdx, 1);
            setFocused1(newArr);

            const otherNewArr = [...focusedIdx2];
            otherNewArr.splice(focusedIdx2.indexOf(valueIdx), 1);
            setFocusedIdx1(otherNewArr);
          }
        }}
        alwaysOpen={true}
        defaultMaxOptions={selected.length}
        options={selected}
      />
    </div>
  );
};

export default SelectBox;
