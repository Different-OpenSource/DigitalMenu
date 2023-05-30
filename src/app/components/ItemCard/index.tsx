"use client"
import './ItemCard.css';

interface ItemCardProps {
  title: string;
  description: string;
  price: number;
  src: string;
  alt: string;
  handle_click: () => void;
}

const ItemCard: React.FC<ItemCardProps> = ({
  title,
  description,
  price,
  src,
  alt,
  handle_click
}) => {

  return (
    <div className="item-card" onClick={handle_click}>
      <div className="item-card-content">
        <div className="left-column">
            <div className='item-title'>
                <h2 >{title}</h2>
            </div>
            <div className='item-description'>
                <p >{description}</p>
            </div>
            <div className='item-price'>
                <p><strong>${price}</strong></p>
            </div>
        </div>
        <div className="right-column">
            <img className='item-image' src={src} alt={alt} />
        </div>
      </div>
  </div>
  );
};

export default ItemCard;