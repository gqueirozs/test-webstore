import { ContentBlock, InputTextArea } from "Shared/Components";

const TextAreas = () => {
  return (
    <>
      <ContentBlock title="Campos Normais" helpPage="/teste">
        <div>
          <InputTextArea label="Label" name="Biblioteca" />
        </div>

        <div>
          <InputTextArea
            label="Label"
            name="Biblioteca"
            placeholder="TextArea"
          />
        </div>
      </ContentBlock>
    </>
  );
};

export default TextAreas;
