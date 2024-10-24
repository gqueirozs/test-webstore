import { ReactNode } from "react";
import { MenuProvider, useMenu } from "Shared/Contexts/MenuContext";
import { ThemeProvider, useTheme } from "Shared/Contexts/ThemeContext";
import { HeaderProvider, useHeader } from "Shared/Contexts/HeaderContext";
import { FloatPageProvider, useFloatPage } from "Shared/Contexts/FloatingPages";
import { NotificationProvider, useNotification } from "Shared/Contexts/NotifyContext";
import { AlertProvider, useAlert } from "Shared/Contexts/AlertsVerify";

const GlobalProviders = ({ children }: { children: ReactNode }) => (
  <AlertProvider>
    <ThemeProvider>
      <MenuProvider>
        <HeaderProvider>
          <FloatPageProvider>
            <NotificationProvider>{children}</NotificationProvider>
          </FloatPageProvider>
        </HeaderProvider>
      </MenuProvider>
    </ThemeProvider>
  </AlertProvider>
);

export { GlobalProviders, useMenu, useTheme, useFloatPage, useNotification, useAlert, useHeader };
