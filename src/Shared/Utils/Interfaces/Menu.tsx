import MenuObj from "../../Utils/Data/Menu.json"
type TMenu = keyof typeof MenuObj

interface IMenuLink {
  label: string;
  title: boolean;
  targetBlank?: boolean;
  link: string;
}

interface IMenuItem {
  Icon: string;
  AriaLabel: string;
  Links: Array<IMenuLink>;
}


/** Definição de um item do Menu. */
interface IMenuIconItem {
  /** The label for the Menu item. */
  label: TMenu;
  // Icone do Item do Menu.
  iconName: string;
  // Index do Item do Menu.
  idx: number;
}

export type {
  IMenuLink,
  IMenuItem,
  IMenuIconItem
}