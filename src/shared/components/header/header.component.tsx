
const HeaderComponent = ({title, subTitle} : {title: string, subTitle: string}) => {
  return (
    <div>
        <h1>{title}</h1>
        <p>{subTitle}</p>
    </div>
  )
}

export default HeaderComponent;