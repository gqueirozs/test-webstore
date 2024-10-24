import "./OrdersSelect.scss";
import { InputSelect } from "Shared/Components";
import { useState } from "react";

const optionsArr = [
  {
    color: "#444444",
    value: "Pedido realizado",
    background: "#FFFBE3",
  },
  {
    color: "#444444",
    value: "Pago",
    background: "#EAFFD5",
  },
  {
    color: "#444444",
    value: "Cancelado",
    background: "#FFDBDB",
  },
];

const OrdersSelect = ({ defaultOption = 0 }: { defaultOption:number }) => {
  const [selected, setSelected] = useState(optionsArr[defaultOption]);

  return (
    <>
      <InputSelect
        customName={'OrdersSelect_Container'}
        className={selected.background.replace("#", "")}
        label="Status do Pedido"
        name="OrderState"
        defaultOption={defaultOption}
        defaultMaxOptions={1}
        defaultEmpty={true}
        defaultAction={(option) =>
          setSelected(option as (typeof optionsArr)[0])
        }
        options={optionsArr}
      />
    </>
  );
};

export default OrdersSelect;
