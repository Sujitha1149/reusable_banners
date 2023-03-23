import './index.css'

const BannerCardItem = props => {
  const {bannerCardsList} = props
  const {headerText, description, className} = bannerCardsList
  return (
    <li className={`${className} bg-banner-card`}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="description ">{description}</p>
        <button type="button" className="show-more-btn">
          Show More
        </button>
      </div>
    </li>
  )
}
export default BannerCardItem
