import {Notification} from 'iconsax-react'
import style from './header.module.scss';
import author_image from '../../../assets/author-images/author-demo-image.jpg'

const HeaderComponent = ({title, subTitle} : {title: string, subTitle: string}) => {
  return (
        <div className='flex flex-row js-sp-between'>
            <div className="headding flex flex-column g-8">
                <span className='sb-text-xl-1 secondary-500'>{title}</span>
                {subTitle.length > 0 ? (<span className='m-text-base secondary-400'>{subTitle}</span>) : undefined}
            </div>
            
            <div className='flex flex-row g-24'>
                <button type='button' onClick={(e) => {console.log("clicked")}} className={style['notification-container']}>
                    <span className={style['notification-icon-wrapper']}>
                        <Notification size={24} />
                        <span className={style['_notification']}></span>
                    </span>
                </button>
                <span className={`flex ai-center jc-center ${style['img-fill']}`}>
                    <img src={author_image} className={style['author-img']} alt="author image" />
                </span>
            </div>
        </div>
    )
}

export default HeaderComponent;