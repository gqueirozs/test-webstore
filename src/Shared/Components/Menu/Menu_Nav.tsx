import { Menu_Nav_List } from "Shared/Components";
import { useMenu } from "Shared/Contexts";
import MenuObj from "../../Utils/Data/Menu.json";

import { motion, AnimatePresence } from "framer-motion";
import { menuTransition, mobileMenuTransition } from "Shared/Utils/Data/Animations";
import isMobile from "Shared/Utils/Functions/Mobile";

const Menu_Nav = () => {
  const Mobile = isMobile()
  const { menu } = useMenu();

  return (
    <AnimatePresence>
      {menu && (
        <motion.section
          key={"menuIs" + (menu as any) ? "on" : "off"}
          variants={Mobile ? mobileMenuTransition : menuTransition }
          initial="hidden"
          exit="exit"
          animate="visible"
          className="Menu_Nav_Container"
        >
          {menu && <Menu_Nav_List key={menu as any} list={MenuObj[menu].Links} />}
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Menu_Nav;
