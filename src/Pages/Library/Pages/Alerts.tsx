import { FloatBlock, ContentBlock, InputButton } from "Shared/Components";
import { useAlert, useNotification } from "Shared/Contexts";

const Alerts = () => {
  const { notification, setNotification } = useNotification();
  const { customAlert, setCustomAlert } = useAlert();

  return (
    <>
      <ContentBlock title="Alertas Flutuantes" helpPage="/teste">
        <div className="Flex_Row">
          <InputButton type="Save"
            onClick={() => {
              setCustomAlert({
                label: 'Sair da página sem salvar alterações?',
                content: 'Todas as alterações não salvas serão perdidas quando você sair da página.',
                confirmAction: () => alert('Confirmado!')
              })
            }}
          >Acionar alerta</InputButton>
        </div>
        <div className="Flex_Row">
          <InputButton
            type="Save"
            onClick={() =>
              setNotification({
                title: "Operação concluída",
                message: "Sua página foi salva com sucesso!",
                type: "success",
              })
            }
          >
            Sucesso
          </InputButton>
        </div>
        <div className="Flex_Row">
          <InputButton
            type="Delete"
            onClick={() =>
              setNotification({
                title: "Falha na operação",
                message: "Sua página não foi salva, tente novamente!",
                type: "error",
              })
            }
          >
            Erro
          </InputButton>
        </div>
      </ContentBlock>

      <FloatBlock title="Página salva com sucesso." type="success" />

      <FloatBlock title="Erro inesperado, tente novamente!" type="error" />

      <FloatBlock title="Página salva com sucesso." type="success">
        Ver em sua loja virtual ou criar uma nova categoria.
      </FloatBlock>

      <FloatBlock
        title="Alguns campos possuem preenchimento obrigatório:"
        type="error"
      >
        - Nome do produto
        <br />
        - Preço de venda
        <br />
        - Estoque
        <br />
      </FloatBlock>
    </>
  );
};

export default Alerts;
