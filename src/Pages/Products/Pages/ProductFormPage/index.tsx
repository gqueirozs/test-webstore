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
import { Close, More } from "Shared/Assets/Icons";

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
            <table className="Products_Table">
              <tbody>
                {[1, 2, 3].map((_, index) => (
                  <tr key={`product-01-${index}`}>
                    <td colSpan={3}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "10px 0",
                          ...(index !== 2 && {
                            borderBottom: "1px solid #dedede",
                          }),
                        }}
                      >
                        <div
                          style={{
                            width: 60,
                            height: 60,
                            padding: 20,
                            border: "1px solid #cfcccc",
                            borderRadius: 6,
                            marginRight: 10,
                          }}
                        />
                        <span style={{ flex: 1 }}>
                          Nome do produto nome do produto...
                        </span>
                        <button>
                          <Close />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <br />

            <InputButton icon={false} type="Filter">
              Adicionar produto
            </InputButton>
          </CardSection>

          <CardSection title="Compre junto">
            <table className="Products_Table">
              <tbody>
                {[1].map((_, index) => (
                  <tr key={`product-02-${index}`}>
                    <td colSpan={3}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          padding: "10px 0",
                        }}
                      >
                        <div
                          style={{
                            width: 60,
                            height: 60,
                            padding: 20,
                            border: "1px solid #cfcccc",
                            borderRadius: 6,
                            marginRight: 10,
                          }}
                        />
                        <div>
                          <span style={{ flex: 1 }}>
                            Nome do produto nome do produto...
                          </span>
                          <br />
                          <span style={{ flex: 1 }}>R$ 000,00</span>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <br />

            <InputButton icon={false} type="Filter">
              Adicionar produto
            </InputButton>

            <br />

            <div className="Input_Columns">
              <div style={{ flex: 1, marginTop: 5 }}>
                <InputSelect
                  label="Tipo de desconto"
                  name="selectDiscountTypeProduct"
                  defaultMaxOptions={1}
                  defaultOption={0}
                  placeholder="Selecione"
                  options={[
                    {
                      value: "Percentual (%)",
                    },
                    {
                      value: "Valor (R$)",
                    },
                  ]}
                />
              </div>

              <div style={{ flex: 1 }}>
                <TextInput
                  label="Valor do desconto"
                  name="variationSize"
                  placeholder="0,00"
                  leftAdditional="R$"
                  iconAlign="Left"
                  iconStyle="Box"
                />
              </div>
            </div>

            <br />

            <div className="Input_Columns">
              <TextInput
                label="Valor total de produtos"
                name="variationSize"
                value="R$ 000,00"
                disabled
              />

              <TextInput
                label="Valor promocional"
                name="variationSize"
                value="R$ 000,00"
                disabled
              />
            </div>
          </CardSection>

          <CardSection title="Otimização para buscadores">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>
                <div style={{ marginBottom: 4 }}>
                  <span>URL da página</span>
                </div>

                <span style={{ color: "#cbcbcb" }}>
                  https://www.dominio.com.br
                </span>
              </div>

              <div style={{ flex: 1, marginLeft: 10 }}>
                <TextInput name="variationSize" value="nome-da-categoria" />
              </div>
            </div>

            <br />

            <TextInput
              name="variationSize"
              label="Título da página"
              placeholder="Camisetas masculinas de diversos modelos"
              max={100}
              showMax
            />

            <br />

            <TextArea
              label="Descrição da categoria"
              max={160}
              showMax
              name="productCategoryDescription"
            />

            <br />

            <div style={{ display: "flex", alignItems: "flex-end" }}>
              <div style={{ flex: 1, marginRight: 10 }}>
                <TextInput
                  name="variationSize"
                  label="Insira palavras-chave desta página"
                  placeholder="Camisetas masculinas de diversos modelos"
                />
              </div>

              <div>
                <InputButton icon={false} type="Filter">
                  OK
                </InputButton>
              </div>
            </div>

            <br />

            <div className="Flex_Row g-3">
              <SelectionTag label="exemplo" action={() => alert("exemplo")} />
              <SelectionTag
                label="aqui vai o exemplo"
                action={() => alert("aqui vai o exemplo")}
              />
            </div>

            <br />

            <hr />

            <div className="Preview">
              <h1>Pré-visualização no Google</h1>

              <div className="Preview_Domain">
                <div className="Preview_DomainIcon">
                  <span>D</span>
                </div>

                <div>
                  <span>dominio.com.br</span>

                  <br />

                  <span>https://www.dominio.com.br/nome-da-categoria</span>
                </div>
              </div>

              <div className="Preview_Content">
                <h2>Título da página</h2>

                <p>
                  description description description description description
                  description description description description description
                  description description description 
                </p>
              </div>
            </div>
          </CardSection>
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
              <SelectionTag label="Regata" action={() => alert("Regata")} />
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

          <CardSection title="Tabela de preços">
            <TextInput
              label="Preço de venda"
              name="priceSale"
              placeholder="0,00"
              leftAdditional="R$"
              iconAlign="Left"
            />

            <br />

            <TextInput
              label="Preço promocional"
              name="priceDiscount"
              placeholder="0,00"
              leftAdditional="R$"
              iconAlign="Left"
            />

            <br />

            <TextInput
              label="Quantidade mínima de compra"
              name="quantity"
              placeholder="1"
              type="number"
            />

            <br />

            <TextInput
              label="Quantidade máxima de compra"
              name="quantity"
              placeholder="1"
              type="number"
            />

            <br />

            <hr />

            <div style={{ textAlign: "center" }}>
              <a href="">Gerar código aleatório</a>
            </div>

            <hr />
          </CardSection>
        </div>
      </div>
    </div>
  );
};
