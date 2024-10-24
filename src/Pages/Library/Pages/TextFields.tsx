import {
  ContentBlock,
  InputText,
  InputDataList,
  InputButton,
} from "Shared/Components";

const TextFields = () => {
  return (
    <>
      <div className="Content_Divisor">
        <div>
          <ContentBlock title="Opções de Tamanho" helpPage="/teste">
            <div>
              <InputText
                name="Biblioteca"
                size="Minimum"
                label="1/4"
                max={100}
              />
            </div>

            <div>
              <InputText name="Bibl ioteca" size="Half" label="2/4" max={100} />
            </div>

            <div>
              <InputText
                name="Biblioteca"
                size="Medium"
                label="3/4"
                max={100}
              />
            </div>

            <div>
              <InputText name="Biblioteca" size="Full" label="4/4" max={100} />
            </div>
          </ContentBlock>

          <ContentBlock title="Campos normais" helpPage="/teste">
            <div>
              <InputText
                name="Biblioteca"
                readonly={true}
                label="Label"
                max={100}
              />
            </div>

            <div>
              <InputText
                name="Biblioteca"
                readonly={true}
                label="Label"
                max={100}
                placeholder="Placeholder"
              />
            </div>

            <div>
              <InputText name="Biblioteca" placeholder="Placeholder" />
            </div>
          </ContentBlock>
        </div>

        <div>
          <ContentBlock title="Campos com ícones" helpPage="/teste">
            <div>
              <InputText
                name="Biblioteca"
                iconAlign="Right"
                label="Label"
                icon="Search"
              />
            </div>

            <div>
              <InputText
                name="Biblioteca"
                iconAlign="Right"
                label="Label"
                placeholder="Placeholder"
                icon="Search"
              />
            </div>

            <div>
              <InputText name="Biblioteca" iconAlign="Right" icon="Search" />
            </div>

            <div>
              <InputText
                name="Biblioteca"
                iconAlign="Right"
                iconStyle="Box"
                label="Label"
                icon="Box"
              >
                asdsa
              </InputText>
            </div>

            <div>
              <InputText
                name="Biblioteca"
                iconAlign="Right"
                iconStyle="Box"
                label="Label"
                placeholder="Placeholder"
                icon="Box"
              />
            </div>

            <div>
              <InputText name="Biblioteca" label="Label" icon="Search" />
            </div>

            <div>
              <InputText
                name="Biblioteca"
                label="Label"
                placeholder="Placeholder"
                icon="Search"
              />
            </div>

            <div>
              <InputText
                name="Biblioteca"
                placeholder="Placeholder"
                icon="Search"
              />
            </div>

            <div>
              <InputText
                name="Biblioteca"
                label="Label"
                iconStyle="Box"
                icon="Box"
              />
            </div>

            <div>
              <InputText
                name="Biblioteca"
                label="Label"
                iconStyle="Transparent"
                placeholder="Placeholder"
                icon="Graph"
              />
            </div>
          </ContentBlock>
        </div>
      </div>
    </>
  );
};

export default TextFields;
