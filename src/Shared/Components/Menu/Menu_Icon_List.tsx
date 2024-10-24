import "./Menu.scss";
import MenuObj from "../../Utils/Data/Menu.json";
import { useMenu } from "Shared/Contexts";

import { Menu_Icon_Item } from "Shared/Components";
import { motion, AnimatePresence } from "framer-motion";
import isMobile from "Shared/Utils/Functions/Mobile";
import { mobileMenuIconAnimation, menuIconAnimation } from "Shared/Utils/Data/Animations";


const Menu_Icon_List = () => {
  const Mobile = isMobile();
  const { menu } = useMenu();
  const MenuItems = [...Object.keys(MenuObj) as Array<keyof typeof MenuObj>].filter(item => MenuObj[item].Mobile || !Mobile );
  const MenuIndex = menu ? MenuItems.indexOf(menu as any) : 0;

  return (
    <nav role="navigation" aria-label="Main Menu">
      <ul className="Menu_Icon_List">
        {MenuItems.map((item, idx) => (
          <Menu_Icon_Item
            key={idx}
            idx={idx}
            label={item}
            iconName={MenuObj[item as keyof typeof MenuObj].Icon}
          />
        ))}
        <AnimatePresence>
          {menu && (
            <motion.li
              variants={Mobile ? mobileMenuIconAnimation(MenuIndex) : menuIconAnimation(MenuIndex)}
              initial="initial"
              exit="exit"
              animate="animate"
              className="Animated_Icon"
            ></motion.li>
          )}
        </AnimatePresence>
      </ul>
    </nav>
  );
};

export default Menu_Icon_List;
