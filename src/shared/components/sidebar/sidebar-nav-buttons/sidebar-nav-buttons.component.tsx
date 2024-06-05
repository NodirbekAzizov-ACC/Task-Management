import { NavLink } from "react-router-dom"
import { NavButton } from "../../../models/navbutton.model"
import './sidebar-nav-button.scss';

const SidebarNavButton = ({navbutton}: NavButton) => {
  const styleClasses = ({ isActive }: { isActive: boolean }): string =>
    `pv-10 ph-20 flex flex-row content-width g-12 ai-center ${isActive ? "navlink-active secondary-500" : "navlink secondary-300"}`;
  
  return (
    <NavLink to={navbutton.path} className={styleClasses}>
        {<navbutton.icon />} 
        <span className="w-112">{navbutton.name}</span> 
    </NavLink>
  )
}

export default SidebarNavButton;