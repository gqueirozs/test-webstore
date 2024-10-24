import { ReactNode } from "react";
import { createContext, useState, useContext } from "react";

type NotificationType = {
  title?: string;
  message?: string;
  type: "info" | "error" | "success" | "hidden";
};

type NotificationState = NotificationType | false;

interface NotificationContextType {
  notification: NotificationState;
  setNotification: (newNotification: NotificationState) => void;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (context === undefined) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notification, setNotification] = useState<NotificationState>(false);

  const contextValue: NotificationContextType = {
    notification,
    setNotification,
  };

  return (
    <NotificationContext.Provider value={contextValue}>{children}</NotificationContext.Provider>
  );
};
