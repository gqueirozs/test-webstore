import {
  Close,
  KnowledgeBase,
  VideoMiniature,
  Lamp,
  TalkBallon,
} from "Shared/Assets/Icons";
import { InputText } from "Shared/Components";

import { motion } from "framer-motion";
import { lateralPageTransition } from "Shared/Utils/Data/Animations";

const UserHelp = ({ close }: { close: VoidFunction }) => {
  return (
    <motion.div
      variants={lateralPageTransition}
      initial="hidden"
      exit="exit"
      animate="visible"
      className="Lateral_Float_Page Flex_Column"
    >
      <div className="Float_Page_Header Justify_Between">
        <b>Ajuda</b>

        <span className="Float_Page_Close" onClick={close}>
          <Close />
        </span>
      </div>

      <div className="Float_Page_Line Static">
        <InputText
          placeholder="Ex.: como cadastrar produtos"
          icon="Search"
          name="HelpSearch"
        />
      </div>

      <a
        className="Float_Page_Line g-4"
        href="https://ajuda.webstore.net.br/pt-BR/"
        target="_blank"
      >
        <KnowledgeBase />
        Base de conhecimento
      </a>
      <a
        className="Float_Page_Line g-4"
        href="https://www.youtube.com/@WebstorePlataformadeEcommerce"
        target="_blank"
      >
        <VideoMiniature />
        Vídeos tutoriais
      </a>
      <a
        className="Float_Page_Line g-4"
        href="https://feedback.userreport.com/6a16acc5-20f1-497f-a359-2ff68137c9eb"
        target="_blank"
      >
        <Lamp />
        Sugerir melhoria
      </a>
      <a className="Float_Page_Line g-4">
        <TalkBallon />
        Fale com nosso suporte
      </a>
    </motion.div>
  );
};

export default UserHelp;
