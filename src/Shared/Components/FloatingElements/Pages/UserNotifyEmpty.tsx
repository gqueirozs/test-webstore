import { Close } from "Shared/Assets/Icons";

import { UserNotifications } from "Shared/Components";

import { motion } from "framer-motion";
import { lateralPageTransition } from "Shared/Utils/Data/Animations";

const UserNotifyEmpty = ({ close }: { close: VoidFunction }) => {
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
          <b>Notificações</b>

          <a className="smallLink">Ver Todos</a>
        </span>

        <span className="Float_Page_Close" onClick={close}>
          <Close />
        </span>
      </div>

      <UserNotifications arr={[]} />
    </motion.div>
  );
};

export default UserNotifyEmpty;
