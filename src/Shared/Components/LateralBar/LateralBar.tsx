import "./LateralBar.scss";
import { useEffect, useState, useRef } from "react";
import { Logo, Menu_Icon_List } from "Shared/Components";

import { useMenu } from "Shared/Contexts";
import isMobile from "Shared/Utils/Functions/Mobile";

const LateralBar = () => {
  const Mobile = isMobile();
  const { menu } = useMenu();
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  useEffect(() => {
    if (!Boolean(menu)) setIsAnimating(true);
    setIsActive(Boolean(menu));
  }, [menu]);

  useEffect(() => {
    setTimeout(() => {
      if (Boolean(menu) && isActive) setIsAnimating(false);
    }, 1001);
  }, [isActive]);

  return (
    <section
      className='Lateral_Bar'
      data-active={isAnimating ? 'animating' : isActive}
    >
      {!Mobile && <Logo />}
      <Menu_Icon_List />
    </section>
  );
};

export default LateralBar;
