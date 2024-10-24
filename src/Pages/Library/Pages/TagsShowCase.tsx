import { ContentBlock, FloatingTag, InfoTag, SelectionTag } from "Shared/Components";

const TagsShowCase = () => {
  return (
    <>
      <ContentBlock title="Tags Usadas" helpPage="/teste">

        <div className="Flex_Row g-3">
          <InfoTag label="Grátis" />
          <InfoTag label="Pago no app" />
          <InfoTag label="Pago" />
          <InfoTag label="Teste grátis" />
        </div>

        <div className="Flex_Row g-3">
          <SelectionTag label="Aqui vai o exemplo" action={() => alert("Aqui vai o exemplo!")} />
          <SelectionTag label="Aqui vai o exemplo" action={() => alert("Aqui vai o exemplo!")} />

        </div>
        
        <div className="Flex_Row g-3">
          <FloatingTag label="Teste" force={true} />
        </div>
        
      </ContentBlock>
    </>
  );
};

export default TagsShowCase;
