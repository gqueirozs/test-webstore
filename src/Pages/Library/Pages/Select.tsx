import { ContentBlock, InputDataList, InputSelect, DataListWithTag, OrdersSelect, SelectBox } from "Shared/Components";

const Combos = () => {
  return (
    <>
      {/* <ContentBlock title="Inputs de Datalist" helpPage="/teste"></ContentBlock> */}

      <ContentBlock title="Inputs de Seleção" helpPage="/teste">
        <InputSelect
          label="Label"
          name="SelectPadrao1"
          placeholder="Selecione"
          defaultAction={(v) => alert("Ação ao selecionar um input " + v)}
          defaultMaxOptions={1}
          options={[
            {
              value: "Opção 1",
            },
            {
              value: "Opção 2",
            },
            {
              value: "Opção 3",
            },
            {
              value: "Opção 4",
            },
          ]}
        />

        <OrdersSelect 
          defaultOption={0}
        />
        <OrdersSelect 
          defaultOption={1}
        />
        <OrdersSelect 
          defaultOption={2}
        />

      </ContentBlock>

      <ContentBlock title="Opções de Tamanho" helpPage="/teste">
          <SelectBox />
          
          <InputSelect
            customName="SelectAlwaysOpen"
            label="Aberto"
            name="Aberto1"
            alwaysOpen={true}
            defaultMaxOptions={1}
            options={[
              {
                value: 'Selecione1'
              },
              {
                value: 'Selecione2'
              },
              {
                value: 'Selecione3'
              },
              {
                value: 'Selecione4'
              },
              {
                value: 'Selecione5'
              }
            ]}
          />
      </ContentBlock>

    </>
  );
};

export default Combos;
