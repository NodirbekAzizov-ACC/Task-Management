import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/sidebar.component"
import HeaderComponent from "../components/header/header.component";

const MianLayoutComponent = () => {
  return (
    <div className="flex flex-row">
        <Sidebar />
        <div className="flex flex-column p-32 w-100">
            <HeaderComponent title="Hi, Dennis Nzioki" subTitle="Let's finish your task today!"/>
            <Outlet></Outlet>
        </div>
    </div>
  )
}

export default MianLayoutComponent;