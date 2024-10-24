import { Menu_Nav_Item } from "Shared/Components";
import { IMenuLink } from "Shared/Utils/Interfaces/Menu";

import { motion } from "framer-motion";

const Menu_Nav_List = ({ list }: { list: Array<IMenuLink> }) => {
  return (
    <>
      <motion.ul
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1
        }}
      >
        {list.map((item) => (
          <Menu_Nav_Item {...item} />
        ))}
      </motion.ul>
    </>
  );
};

export default Menu_Nav_List;
