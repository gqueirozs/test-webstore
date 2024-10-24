import "./PushNotify.scss";

import { useNotification } from "Shared/Contexts";
import { motion, AnimatePresence } from "framer-motion";
import { lateralNotifyTransition } from "Shared/Utils/Data/Animations";

import { Close } from "Shared/Assets/Icons";

const PushNotify = () => {
  const { notification, setNotification } = useNotification();

  return (
      <AnimatePresence>
        {notification && (
          <motion.div
            key={notification.type}
            variants={lateralNotifyTransition}
            initial="hidden"
            exit="hidden"
            animate="visible"
            data-type={notification.type}
            className="Push_Notify"
          >
            <span className="close" onClick={() => setNotification(false)}>
              <Close />
            </span>
            <b>{notification.title}</b>
            {notification.message && <span>{notification.message}</span>}
          </motion.div>
        )}
      </AnimatePresence>
  );
};

export default PushNotify;
