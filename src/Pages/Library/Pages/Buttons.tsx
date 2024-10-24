import { InputButton, ContentBlock } from "Shared/Components";

const Buttons = () => {
  return (
    <>
      <ContentBlock title="Normais" helpPage="/teste">
        <div className="Flex_Auto g-6">
          <InputButton icon={false} type="Save" />
          <InputButton icon={false} type="Delete" />
          <InputButton icon={false} type="Add" />
          <InputButton icon={false} type="Filter" />
          <InputButton icon={false} type="More" />
        </div>
      </ContentBlock>

      <ContentBlock title="Com ícone na esquerda" helpPage="/teste">
        <div className="Flex_Auto g-6">
          <InputButton type="Save" />
          <InputButton type="Delete" />
          <InputButton type="Add" />
          <InputButton type="Filter" />
          <InputButton type="More" />
        </div>
      </ContentBlock>

      <ContentBlock title="Com ícone na direita" helpPage="/teste">
        <div className="Flex_Auto g-6">
          <InputButton type="Save" className="Flex_Row_Reverse" />
          <InputButton type="Delete" className="Flex_Row_Reverse" />
          <InputButton type="Add" className="Flex_Row_Reverse" />
          <InputButton type="Filter" className="Flex_Row_Reverse" />
          <InputButton type="More" className="Flex_Row_Reverse" />
        </div>
      </ContentBlock>

      <ContentBlock title="Somente ícone" helpPage="/teste">
        <div className="Flex_Auto g-6">
          <InputButton label={false} type="Delete" />
          <InputButton label={false} type="Add" />
          <InputButton label={false} type="Filter" />
          <InputButton label={false} type="More" />
        </div>
      </ContentBlock>
    </>
  );
};

export default Buttons;
