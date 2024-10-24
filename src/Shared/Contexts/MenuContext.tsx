import { ReactNode } from "react";
import { createContext, useState, useContext, Dispatch, SetStateAction } from "react";
import MenuObj from "../Utils/Data/Menu.json";

interface MenuContextType {
  menu: keyof typeof MenuObj | false;
  setMenu: Dispatch<SetStateAction<keyof typeof MenuObj | false>>;
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

export const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

export const MenuProvider = ({ children }: { children: ReactNode }) => {
  const [menu, setMenu] = useState<keyof typeof MenuObj | false>(false);

  const contextValue: MenuContextType = {
    menu,
    setMenu,
  };

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};
