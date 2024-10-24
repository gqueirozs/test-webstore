import * as Icons from "Shared/Assets/Icons";
import { FloatingTag } from "Shared/Components";

import { IMenuIconItem } from "Shared/Utils/Interfaces/Menu"
import { useMenu } from "Shared/Contexts";
import isMobile from "Shared/Utils/Functions/Mobile";

const Menu_Icon_Item = ( { label, iconName, idx }:IMenuIconItem ) => {
  const { menu, setMenu } = useMenu();

  const handleActiveMenu = () => {
    if (menu === label) {
      setMenu(false);
    } else {
      setMenu(label)
    } 
  };

  const IconComponent = Icons[iconName as keyof typeof Icons];

  return ( 
    <li
      className={menu === label ? 'active' : ''}
      onClick={handleActiveMenu}
    >
      <IconComponent />
      { !isMobile() && <FloatingTag label={label.toString()} />}
    </li>
  );
};

export default Menu_Icon_Item;
