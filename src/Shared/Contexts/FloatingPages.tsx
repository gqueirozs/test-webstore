import { ReactNode } from "react";
import { createContext, useState, useContext, Dispatch, SetStateAction, useEffect } from "react";

import { TPages } from "Shared/Utils/Interfaces/FloatPages";

interface FloatPageContextType {
  floatPage: TPages | false;
  setFloatPage: Dispatch<SetStateAction<TPages | false>>;
}

export const FloatPageContext = createContext<FloatPageContextType | undefined>(undefined);

export const useFloatPage = () => {
  const context = useContext(FloatPageContext);
  if (context === undefined) {
    throw new Error("useFloatPage must be used within a FloatPageProvider");
  }
  return context;
};

export const FloatPageProvider = ({ children }: { children: ReactNode }) => {
  const [floatPage, setFloatPage] = useState<TPages | false>(false);

  const contextValue: FloatPageContextType = {
    floatPage,
    setFloatPage
  };

  return (
    <FloatPageContext.Provider value={contextValue}>{children}</FloatPageContext.Provider>
  );
};

export default FloatPageContext;
