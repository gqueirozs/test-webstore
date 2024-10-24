import { InputRange, InputMultiple_Range, ContentBlock } from "Shared/Components";

const Ranges = () => {
  return (
    <>
      <ContentBlock title="Input Range" helpPage="/teste">
        <div>
          <InputRange
            name="Biblioteca"
            label="Selecione uma opção abaixo"
            min={10}
            max={150}
          />
        </div>

        <div>
          <InputMultiple_Range
            range={true}
            // minDistance={10}
            name="Biblioteca"
            label="Selecione uma opção abaixo"
            min={0}
            max={100}
          />
        </div>
      </ContentBlock>
    </>
  );
};

export default Ranges;
