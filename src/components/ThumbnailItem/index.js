// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {itemListComp, onImgChange, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = itemListComp

  const onChange = () => {
    onImgChange(id)
  }

  const activeBtnClass = isActive ? 'activatedBtn' : ''

  return (
    <li className="list-item">
      <button type="button" className="img-btn" onClick={onChange}>
        <img
          src={`${thumbnailUrl}`}
          className={`img ${activeBtnClass}`}
          alt={`${thumbnailAltText}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
