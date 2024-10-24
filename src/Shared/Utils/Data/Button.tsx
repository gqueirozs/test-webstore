import { TIcons } from "Shared/Utils/Interfaces/Icons";

interface IButtonData {
  Label: string;
  Icon: TIcons;
}

const data: { [key: string]: IButtonData } = {
  "Save": {
    Label: "Salvar",
    Icon: "Box"
  },
  "Delete": {
    Label: "Deletar",
    Icon: "Trashcan"
  },
  "Add": {
    Label: "Adicionar",
    Icon: "Box"
  },
  "Filter": {
    Label: "Filtros",
    Icon: "Box"
  },
  "More": {
    Label: "Mais Opções",
    Icon: "Box"
  }
}

export default data;
