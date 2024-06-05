import { Outlet } from 'react-router-dom'
import { SidebarTabs } from '../../models/global-variables'
import SidebarNavButton from './sidebar-nav-buttons/sidebar-nav-buttons.component'
import SidebarHeader from './sidebar-header/sidebar-header'
import HelpCenterComponent from './help-center/help-center.component'

const Sidebar = () => {
  return (
    <div className='flex flex-row sidebar'>
      <div className='flex flex-column jc-center h-100vh js-sp-between p-32'>
          <div className='flex flex-column ai-center'>
            <SidebarHeader />
            <section className='flex flex-column g-24'>
                {SidebarTabs.map((tab, index) => (
                  <SidebarNavButton key={index} navbutton={tab.navbutton}/>
                ))}
            </section>
          </div>
            
            <HelpCenterComponent />
        </div>
        
        <Outlet></Outlet>
    </div>
        
  )
}

export default Sidebar