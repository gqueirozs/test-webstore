import { Close, Configs } from "Shared/Assets/Icons";

import { UserNotifications } from "Shared/Components";

import { motion } from "framer-motion";
import { lateralPageTransition } from "Shared/Utils/Data/Animations";

const notificationsArray = [
  {
    isRead: false,
    message: "Novo pedido #242342",
  },
  {
    isRead: false,
    message: "Novo cliente Gustavo Perina",
  },
  {
    isRead: false,
    message: "Novo pedido #242342",
  },
  {
    isRead: true,
    message: "Novo pedido #242342",
  },
  {
    isRead: true,
    message: "Erro de integração com Mercado Livre",
  },
];

const UserNotify = ({ close }: { close: VoidFunction }) => {
  return (
    <motion.div
      variants={lateralPageTransition}
      initial="hidden"
      exit="exit"
      animate="visible"
      className="Lateral_Float_Page Flex_Column"
    >
      <div className="Float_Page_Header Justify_Between">
        <span className="Flex_Column">
          <b>Mensagens</b>

          <a className="smallLink">Ver Todos</a>
        </span>

        <span className="Flex_Row Align_Center g-4">
          <span className="UserNotify_Config_Icon">
            <Configs /> 
          </span>
          <span className="Float_Page_Close Align_Center" onClick={close}>
            <Close />
          </span>
        </span>
      </div>

      <UserNotifications arr={notificationsArray} />
    </motion.div>
  );
};

export default UserNotify;
