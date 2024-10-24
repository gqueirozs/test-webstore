import "./Header.scss";
import { HelpTip, NotifyBell, LetterBox, Search, User } from "Shared/Assets/Icons";
import BreadCrumb from "Shared/Components/BreadCrumb/BreadCrumb";
import Button from "Shared/Components/Inputs/Button";
import FloatingTag from "Shared/Components/Tags/FloatingTag/FloatingTag";
import { useFloatPage, useHeader } from "Shared/Contexts";
import isMobile from "Shared/Utils/Functions/Mobile";

import { motion } from "framer-motion";

const Header = ({ floating, userName = 'Placeholder' }: { floating: boolean, userName?:string }) => {
  const Mobile = isMobile();
  const { setFloatPage } = useFloatPage();
  const { headerTitle, headerButton } = useHeader();

  return (
    <header className={floating ? "Float_Header" : ""}>
      {Mobile ? (
        <>
          <span className="Flex_Row Align_Center g-2">
            <span
              className="Header_Icon UserMenu_Icon"
              onClick={() => setFloatPage("UserMenu")}
            >
              <User />
            </span>
            Olá, { userName }
          </span>

          <div className="Flex_Row">
            <span
              className="Header_Icon"
              onClick={() => setFloatPage("UserNotify")}
            >
              <LetterBox />
            </span>

            <span
              className="Header_Icon"
              onClick={() => setFloatPage("UserNotifyEmpty")}
            >
              <NotifyBell />
            </span>
          </div>
        </>
      ) : (
        <>
          <motion.div className="Header_Top"
            animate={{
              zIndex: floating ? 1 : 3,
              transition: {
                delay: floating ? 0 : .3
              }
            }}
          >
            <span
              className="Header_Icon"
              onClick={() => setFloatPage("UserSearch")}
            >
              <Search />
              <FloatingTag 
                label="Buscar"
                align="Bottom"
              />
            </span>

            <span
              className="Header_Icon"
              onClick={() => setFloatPage("UserHelp")}
            >
              <HelpTip />
              <FloatingTag 
                label="Ajuda"
                align="Bottom"
              />
            </span>

            <span
              className="Header_Icon"
              onClick={() => setFloatPage("UserNotify")}
            >
              <LetterBox />
              <FloatingTag 
                label="Mensagens"
                align="Bottom"
              />
            </span>

            <span
              className="Header_Icon"
              onClick={() => setFloatPage("UserNotifyEmpty")}
            >
              <NotifyBell />
              <FloatingTag 
                label="Notificações"
                align="Bottom"
              />
            </span>

            <span
              className="Header_Icon UserMenu_Icon"
              onClick={() => setFloatPage("UserMenu")}
            >
              <User />
              <FloatingTag 
                label="Menu de Usuário"
                align="Bottom"
              />
            </span>
          </motion.div>

          <motion.div className="Header_Bottom">
            <div className="Justify_Between Align_Center">
              <div className="Flex_Column g-2">
                <BreadCrumb />

                <h1>{headerTitle}</h1>
              </div>

              {
                headerButton && <div> <Button className={headerButton.className} type={headerButton.type} icon={headerButton.icon} onClick={headerButton.onClick}>{headerButton.children}</Button> </div>
              }
              
            </div>
          </motion.div>
        </>
      )}
    </header>
  );
};

export default Header;