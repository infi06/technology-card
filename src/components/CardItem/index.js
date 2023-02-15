// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={className}>
      <h1 className="heading">{title}</h1>
      <p className="describe">{description}</p>
      <img className="img-size" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
