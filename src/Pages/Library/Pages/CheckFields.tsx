import { InputCheckbox, InputRadio, ContentBlock } from "Shared/Components";

const CheckFields = () => {
  return (
    <>
      <div className="Content_Divisor">
        <ContentBlock title="Radio" helpPage="/teste">
          <div className="Flex_Column g-1">
            <div className="Flex_Column mb-2">
              <span>Selecione uma opção abaixo*</span>
              <span className="mandatory Flex_Row">Campo obrigatório</span>
            </div>

            <div>
              <InputRadio name="libraryTest1" label="Desligado" />
            </div>
            <div>
              <InputRadio
                name="libraryTest"
                label="Desligado Desativado"
                readonly={true}
              />
            </div>
            <div>
              <InputRadio
                name="libraryTest1"
                label="Ligado"
                defaultChecked={true}
              />
            </div>
            <div>
              <InputRadio
                name="libraryTest"
                label="Ligado Desativado"
                readonly={true}
                defaultChecked={true}
              />
            </div>
          </div>
        </ContentBlock>
        <ContentBlock title=" Checkbox" helpPage="/teste">
          <div className="Flex_Column g-1">
            <div className="Flex_Row g-2 mb-2">
              <span>Selecione uma opção abaixo</span>
            </div>

            <div>
              <InputCheckbox name="libraryTest2" label="Desligado" />
            </div>

            <div>
              <InputCheckbox
                name="libraryTest2"
                label="Desligado Desativado"
                readonly={true}
              />
            </div>

            <div>
              <InputCheckbox
                name="libraryTest2"
                label="Ligado"
                defaultChecked={true}
              />
            </div>

            <div>
              <InputCheckbox
                name="libraryTest2"
                label="Ligado Desativado"
                readonly={true}
                defaultChecked={true}
              />
            </div>
          </div>
        </ContentBlock>
      </div>

      <div className="Content_Divisor">
        <ContentBlock title="Switch" helpPage="/teste">
          <div className="Flex_Column g-1">
            <div className="Flex_Column mb-2">
              <span>Selecione uma opção abaixo*</span>
              <span className="mandatory Flex_Row">Campo obrigatório</span>
            </div>

            <div>
              <InputRadio
                name="libraryTest3"
                label="Desligado"
                style="Switch"
              />
            </div>
            <div>
              <InputRadio
                name="libraryTest3"
                label="Desligado Desativado"
                readonly={true}
                style="Switch"
              />
            </div>
            <div>
              <InputRadio
                name="libraryTest3"
                label="Ligado"
                defaultChecked={true}
                style="Switch"
              />
            </div>
            <div>
              <InputRadio
                name="libraryTest3"
                label="Ligado Desativado"
                readonly={true}
                defaultChecked={true}
                style="Switch"
              />
            </div>
          </div>
        </ContentBlock>
        <ContentBlock title="Alinhado a direita" helpPage="/teste">
          <div className="Flex_Column g-1">
            <div className="Flex_Row g-2 mb-2">
              <span>Selecione uma opção abaixo</span>
            </div>
            <div>
              <InputCheckbox
                name="libraryTest4"
                label="Teste"
                style="Switch"
                align="Flex_Row_Reverse Justify_Between"
              />
            </div>
            <div>
              <InputCheckbox
                name="libraryTest4"
                label="Teste"
                readonly={true}
                style="Switch"
                align="Flex_Row_Reverse Justify_Between"
              />
            </div>
            <div>
              <InputCheckbox
                name="libraryTest4"
                label="Teste"
                defaultChecked={true}
                style="Switch"
                align="Flex_Row_Reverse Justify_Between"
              />
            </div>
            <div>
              <InputCheckbox
                name="libraryTest4"
                label="Teste"
                readonly={true}
                defaultChecked={true}
                style="Switch"
                align="Flex_Row_Reverse Justify_Between"
              />
            </div>
          </div>
        </ContentBlock>
      </div>
    </>
  );
};

export default CheckFields;
