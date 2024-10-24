import { ReactNode } from "react";
import { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

interface IAlerts {
  label: string,
  content: string | ReactNode,
  cancelOpt?: boolean,
  confirmOpt?: boolean,
  confirmAction?: VoidFunction;
  cancelLabel?: string;
  confirmLabel?: string;
}

interface AlertContextType {
  customAlert: IAlerts | false;
  setCustomAlert: Dispatch<SetStateAction<IAlerts | false>>;
}

export const AlertContext = createContext<AlertContextType | undefined>(undefined);

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error("useAlert must be used within a AlertProvider");
  }
  return context;
};

export const AlertProvider = ({ children }: { children: ReactNode }) => {
  const [customAlert, setCustomAlert] = useState<IAlerts | false>(false);

  const contextValue: AlertContextType = {
    customAlert,
    setCustomAlert
  };

  return (
    <AlertContext.Provider value={contextValue}>{children}</AlertContext.Provider>
  );
};

export default AlertContext;
