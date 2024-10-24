import { Close } from "Shared/Assets/Icons";
import { useTheme } from "Shared/Contexts";

import { InputCheckbox, InfoTag } from "Shared/Components";

import { motion } from "framer-motion";
import { lateralPageTransition } from "Shared/Utils/Data/Animations";

const UserMenu = ({ close }: { close: VoidFunction }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.div
      variants={lateralPageTransition}
      initial="hidden"
      exit="exit"
      animate="visible"
      className="Lateral_Float_Page Flex_Column"
    >
      <div className="Float_Page_Header Justify_Between Align_Center">
        <b>Meu Menu</b>

        <span className="Float_Page_Close" onClick={close}>
          <Close />
        </span>
      </div>

      <a className="Float_Page_Line Justify_Between"><span>Gustavo Perina</span><InfoTag label="Admin"/></a>
      <a className="Float_Page_Line">Indique e ganhe</a>
      <a className="Float_Page_Line">Usuários</a>
      <a className="Float_Page_Line">Minha conta</a>
      <div
        className="Float_Page_Line Justify_Between Theme_Switch"
        onClick={toggleTheme}
      >
        <InputCheckbox
          defaultChecked={theme === "dark"}
          label={theme === "dark" ? "Tema Claro" : "Tema Escuro"}
          name="DarkMode"
          style="Switch"
          align="Flex_Row_Reverse Justify_Between"
        />
      </div>
      <a className="Float_Page_Line">Sair</a>
    </motion.div>
  );
};

export default UserMenu;
