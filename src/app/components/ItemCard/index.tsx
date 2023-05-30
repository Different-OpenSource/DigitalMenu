'use server'
import React, { useEffect, useRef } from 'react';
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
    <div className="item-card">
      <div className="item-card-inside-div" >
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Price: ${price}</p>
        {/* <p>{handle_click}</p> */}
        <button onClick={() => handle_click}>
          teste button
        </button>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};

export default ItemCard;