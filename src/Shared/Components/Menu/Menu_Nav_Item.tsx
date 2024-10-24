import React from 'react'
import { Link } from 'react-router-dom';
import { useMenu } from 'Shared/Contexts';
import { IMenuLink } from "Shared/Utils/Interfaces/Menu";


const Menu_Nav_Item = ({ label, title, link, targetBlank = false }:IMenuLink) => {
  const { setMenu } = useMenu();

  return (
    <li>
      <Link
        onClick={() => setMenu(false)}
        className={title ? 'b' : 'span'} to={link}
        target={targetBlank ? "_blank" : ""}
        style={{
          pointerEvents: title ? 'none' : 'all',
          cursor: title ? 'default' : 'pointer'
        }}  
      >{label}</Link>
    </li>
  )
}

export default Menu_Nav_Item