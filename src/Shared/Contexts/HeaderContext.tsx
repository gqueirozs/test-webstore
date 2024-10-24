import { ReactNode } from "react";
import { createContext, useState, useContext, Dispatch, SetStateAction } from "react";
import { IButton } from "Shared/Utils/Interfaces/Buttons";

interface HeaderContextType {
  headerTitle: string | false;
  setHeaderTitle: Dispatch<SetStateAction<string | false>>;
  headerButton: IButton | undefined
  setHeaderButton: Dispatch<SetStateAction<IButton | undefined>>;
}

export const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const useHeader = () => {
  const context = useContext(HeaderContext);
  if (context === undefined) {
    throw new Error("useHeader must be used within a HeaderProvider");
  }
  return context;
};

export const HeaderProvider = ({ children }: { children: ReactNode }) => {
  const [headerTitle, setHeaderTitle] = useState<string | false>(false);
  const [headerButton, setHeaderButton] = useState<IButton | undefined>(undefined);

  const contextValue: HeaderContextType = {
    headerTitle,
    setHeaderTitle,
    headerButton,
    setHeaderButton
  };

  return (
    <HeaderContext.Provider value={contextValue}>{children}</HeaderContext.Provider>
  );
};
