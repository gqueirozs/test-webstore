import "./styles.scss";

import { FC, useMemo } from "react";
import { CardSection } from "Shared/Components/CardSection/CardSection";
import { PageTitle } from "Shared/Components/PageTitle/PageTitle";
import TextInput from "Shared/Components/Inputs/Text";
import Textarea from "Shared/Components/Inputs/Textarea";
import TextArea from "Shared/Components/Inputs/Textarea";
import Checkbox from "Shared/Components/Inputs/Checkbox";
import CheckFields from "Pages/Library/Pages/CheckFields";
import {
  ContentList,
  InputButton,
  InputCheckbox,
  InputRadio,
  InputSelect,
  InputText,
  SelectionTag,
} from "Shared/Components";
import Button from "Shared/Components/Inputs/Button";
import ImageUpload from "Shared/Components/ImageUpload/ImageUpload";

// import { Container } from './styles';

export const ProductFormPage: FC = () => {
  const TextAreaDivisor = useMemo(() => {
    return <div style={{ margin: 20 }} />;
  }, []);

  return (
    <div>
      <PageTitle title="Adicionar produto" />

      <div className="Cards_Container">
        <div className="Cards_LeftColumn">
          <CardSection title="Informações do produto" helpPage="/help">
            <TextInput
              label="Nome do produto*"
              placeholder="Camiseta manga longa"
              max={100}
              name="productName"
            />

            {TextAreaDivisor}

            <TextArea
              label="Descrição do produto"
              placeholder="Detalhe aqui as características do produto"
              max={1000}
              name="productDescription"
            />

            <div style={{ textAlign: "right", marginTop: 4 }}>
              <a>Adicionar mais descrições</a>
            </div>
          </CardSection>

          <CardSection title="Variação de produtos">
            <div>
              <Checkbox
                label="Habilitar variação de produtos"
                name="enabledProductVariation"
                style="Switch"
              />
            </div>

            <div className="Cards_CheckboxSection">
              <span className="Cards_CheckboxSectionTitle">
                Escolha até 3 tipos de variação
              </span>

              <div>
                <InputCheckbox
                  name="libraryTest2"
                  label="Cor"
                  style="Default"
                  defaultChecked={false}
                />
              </div>

              <div>
                <InputCheckbox
                  name="libraryTest2"
                  label="Tamanho"
                  defaultChecked={true}
                />
              </div>

              <a>Criar novo tipo de variação</a>

              {/* <Button type={'More'}>
                Avançar
              </Button> */}
              <InputButton icon={false} type="Filter">
                Avançar
              </InputButton>
            </div>

            <div className="Product_VariationsSelecteds">
              <div className="Product_VariationsSelecteds_Content">
                <TextInput label="Código da variação" name="variationCode" />

                {TextAreaDivisor}

                <TextInput label="Tamanho" name="variationSize" />
              </div>
            </div>
          </CardSection>

          <CardSection title="Preço" helpPage="/help">
            <div className="Input_Columns">
              <TextInput
                label="Preço de venda"
                name="variationSize"
                leftAdditional="R$"
                placeholder="0,00"
              />

              <TextInput
                label="Preço promocional"
                name="variationSize"
                leftAdditional="R$"
                placeholder="0,00"
              />
            </div>

            {TextAreaDivisor}

            <div className="Input_Columns">
              <TextInput
                label="Preço de custo"
                name="variationSize"
                leftAdditional="R$"
                placeholder="0,00"
              />

              <TextInput
                label="Lucro"
                name="variationSize"
                leftAdditional="R$"
                placeholder="0,00"
              />

              <TextInput
                label="Margem"
                name="variationSize"
                leftAdditional="R$"
                placeholder="0,00"
              />
            </div>

            {TextAreaDivisor}

            <div className="Input_Columns">
              <TextInput
                label="Quantidade mínima de compra"
                name="variationSize"
              />

              <TextInput
                label="Quantidade máxima de compra"
                name="variationSize"
              />
            </div>
          </CardSection>

          <CardSection title="Estoque" helpPage="/help">
            <InputCheckbox
              name="libraryTest3"
              label="Gerenciar estoque deste produto"
              style="Switch"
              defaultChecked
            />

            {TextAreaDivisor}

            <div className="Input_Columns">
              <TextInput
                label="Estoque atual"
                name="variationSize"
                placeholder="1"
              />

              <TextInput
                label="Aviso de reposição de estoque"
                name="variationSize"
                placeholder="1"
              />
            </div>

            {TextAreaDivisor}

            <InputCheckbox
              name="libraryTest4"
              label="Continuar vendendo sem estoque"
              align="Flex_Row_Reverse Justify_Between"
              style="Switch"
            />

            <InputCheckbox
              name="libraryTest4"
              label="Desabilitar produtos indisponíveis "
              align="Flex_Row_Reverse Justify_Between"
              style="Switch"
            />
          </CardSection>

          <CardSection
            title="Imagens do produto"
            subtitle="Cadastre até 10 fotos de produto"
          >
            <ImageUpload />
          </CardSection>

          <CardSection title="Peso e medidas" helpPage="/help">
            <div className="Input_Columns">
              <TextInput
                name="Biblioteca"
                iconAlign="Right"
                iconStyle="Box"
                label="Peso"
                placeholder="0,000"
                rightAdditional="kg"
              />
            </div>

            {TextAreaDivisor}

            <div className="Input_Columns">
              <TextInput
                label="Altura"
                name="variationSize"
                placeholder="0,00"
                rightAdditional="cm"
                iconAlign="Right"
                iconStyle="Box"
              />

              <TextInput
                label="Largura"
                name="variationSize"
                placeholder="0,00"
                rightAdditional="cm"
                iconAlign="Right"
                iconStyle="Box"
              />

              <TextInput
                label="Profundidade"
                name="variationSize"
                placeholder="0,00"
                rightAdditional="cm"
                iconAlign="Right"
                iconStyle="Box"
              />
            </div>
          </CardSection>

          <CardSection title="Categoria e relevância" helpPage="/help">
            <InputSelect
              label="Categoria do produto"
              name="category"
              defaultMaxOptions={1}
              defaultOption={0}
              placeholder="Selecione"
              options={[]}
            />

            <table className="Categories_Table">
              <thead>
                <th>Categorias vinculadas</th>

                <th>Relevâcia</th>
              </thead>

              <tbody>
                <td>Categoria / Subcategoria / Subcategoria</td>

                <td>
                  <div>
                    <button>Alta</button>

                    <button
                      style={{
                        backgroundColor: "#f5f5f5",
                        borderRadius: 4,
                        padding: 10,
                      }}
                    >
                      Média
                    </button>

                    <button>Baixa</button>
                  </div>
                </td>
              </tbody>
            </table>

            <hr />

            <span>Esse produto não possuí categoria vinculada</span>
          </CardSection>

          <CardSection title="Produtos relacionados">
            <InputButton icon={false} type="Filter">
              Adicionar produto
            </InputButton>
          </CardSection>

          <CardSection title="Compre junto"></CardSection>

          <CardSection title="Otimização para buscadores"></CardSection>
        </div>

        <div className="Cards_RightColumn">
          <CardSection>
            <div style={{ padding: 14 }} />

            <InputSelect
              label="Status do produto"
              name="selectStatusProduct"
              defaultMaxOptions={1}
              defaultOption={0}
              placeholder="Selecione"
              options={[
                {
                  value: "Ativo",
                },
                {
                  value: "Inativo",
                },
              ]}
            />

            <a style={{ marginTop: 4 }}>Configurar período</a>
          </CardSection>

          <CardSection title="Códigos do produto">
            <TextInput label="Código do produto" name="variationSize" />

            <a style={{ marginTop: 4 }}>Gerar código aleatório</a>

            {TextAreaDivisor}

            <TextInput label="Código do fabricante" name="variationSize" />

            {TextAreaDivisor}

            <TextInput label="Código do barras" name="variationSize" />
          </CardSection>

          <CardSection>
            <div style={{ padding: 14 }} />

            <TextArea
              label="Descrição curta"
              placeholder="Detalhe aqui as características do produto"
              max={200}
              name="productDescription"
            />
          </CardSection>

          <CardSection>
            <div style={{ padding: 14 }} />

            <TextInput
              label="Vídeo do produto"
              name="variationSize"
              placeholder="https://youtube.com"
              max={200}
              showMax
            />
          </CardSection>

          <CardSection>
            <div style={{ padding: 14 }} />

            <TextInput
              label="Garantia"
              name="variationSize"
              placeholder="1"
              type="number"
              rightAdditional="mês"
              iconAlign="Right"
              iconStyle="Box"
            />
          </CardSection>

          <CardSection>
            <div style={{ padding: 14 }} />

            <InputSelect
              label="Fabricante"
              name="manufacturerProduct"
              defaultMaxOptions={1}
              defaultOption={0}
              placeholder="Pesquisar fabricante do produto"
              options={[]}
            />

            {TextAreaDivisor}

            <InputSelect
              label="Fornecedor"
              name="supplierProduct"
              defaultMaxOptions={1}
              defaultOption={0}
              placeholder="Pesquisar fornecedor do produto"
              options={[]}
            />
          </CardSection>

          <CardSection>
            <div style={{ padding: 14 }} />

            <InputSelect
              label="Tags"
              name="supplierProduct"
              defaultMaxOptions={1}
              defaultOption={0}
              placeholder="Pesquisar tags"
              options={[]}
            />

            <br />

            <div className="Flex_Row g-3">
              <SelectionTag label="Novo" action={() => alert("Novo")} />
              <SelectionTag
                label="Frete grátis"
                action={() => alert("Frete grátis")}
              />
            </div>
          </CardSection>

          <CardSection>
            <div style={{ padding: 14 }} />

            <InputSelect
              label="Atributos"
              name="attributesProduct"
              defaultMaxOptions={1}
              defaultOption={0}
              placeholder="Pesquisar atributos"
              options={[]}
            />

            <br />

            <div className="Flex_Row g-3">
              <SelectionTag label="Camiseta" action={() => alert("Camiseta")} />
              <SelectionTag
                label="Regata"
                action={() => alert("Regata")}
              />
            </div>
          </CardSection>

          <CardSection title="Dados fiscais">
            <InputSelect
              label="Unidade de médida"
              name="unityTypeProduct"
              defaultMaxOptions={1}
              defaultOption={0}
              placeholder="Unidade (un)"
              options={[]}
            />

            {TextAreaDivisor}

            <TextInput label="Ean" name="ean" />

            {TextAreaDivisor}

            <TextInput label="CNAE" name="ean" />
          </CardSection>

          <CardSection title="Tabela de preços"></CardSection>
        </div>
      </div>
    </div>
  );
};
