import "./BlurContainer.scss";
import { useState, useEffect } from "react";
import { useAlert, useFloatPage, useMenu, useNotification } from "Shared/Contexts";

import { Menu_Nav, PushNotify } from "Shared/Components";
import * as floatPages from "Shared/Components/FloatingElements/Pages";

import { motion, AnimatePresence } from "framer-motion";
import Alert from "Shared/Components/FloatingElements/Pages/Alert";

const BlurContainer = () => {
  const [blur, setBlur] = useState<Boolean>(false);
  const { menu, setMenu } = useMenu();
  const { notification, setNotification } = useNotification();
  const { floatPage, setFloatPage } = useFloatPage();
  const { customAlert, setCustomAlert } = useAlert();

  const OpenPage = floatPage
    ? floatPages[floatPage as keyof typeof floatPages]
    : false;

  useEffect(() => {
    if (menu || floatPage || notification || customAlert) setBlur(true);
    else setBlur(false);
  }, [floatPage, menu, notification, customAlert]);

  const close = () => {
    setMenu(false);
    setFloatPage(false);
    setNotification(false);
    setCustomAlert(false);
  };

  return (
    <>
      <AnimatePresence>
        {blur && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="Blur_Page"
            onClick={close}
          ></motion.div>
        )}

      {floatPage && OpenPage && <OpenPage key={floatPage} close={close} />}

      </AnimatePresence>

      <Alert close={close} />
      
      <Menu_Nav />

      <PushNotify />
    </>
  );
};

export default BlurContainer;
