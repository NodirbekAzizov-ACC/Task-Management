import './help-center.scss'
import {FaQuestion} from 'react-icons/fa';

const HelpCenterComponent = () => {
  return (
    <div className='help-center'>
        <div className='help-container flex flex-column ai-center'>
            <span className="help-header">
                <FaQuestion  size={22} color="white"/>
            </span>
            <div className='help-main flex flex-column ai-center js-end pb-16 pv-16 pt-71'>
                <div className='help-message flex flex-column g-12 pb-45'>
                    <span className='sb-text-base'>Help Center</span>
                    <p className='m-text-xs'>Having Trouble in Learning. Please contact us for more question.</p>
                </div>
                
                <button className='help-btn pv-12 ph-24 secondary-500 sb-text-ms'>Go To Help Center</button>
            </div>
        </div>
    </div>
  )
}

export default HelpCenterComponent;