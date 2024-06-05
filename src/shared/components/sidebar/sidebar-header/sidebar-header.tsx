import { BookSquare } from "iconsax-react";
import './sidebar-header.scss';

const SidebarHeader = () => {
  return (
    <div className="flex flex-row g-12 ai-center mb-60">
        <BookSquare className="primary-500" size={40}/>
        <span className="w-136 secondary-500 sb-text-xl-2">DNX</span>
    </div>
  )
}

export default SidebarHeader