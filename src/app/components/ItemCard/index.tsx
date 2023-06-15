"use client"
import styles from './styles.module.css';

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
    <div className={styles.itemCard} onClick={handle_click}>
      <div className={styles.itemCardContent}>
        <div className={styles.leftColumn}>
            <div className={styles.itemTitle}>
                <h2 >{title}</h2>
            </div>
            <div className={styles.itemDescription}>
                <p >{description}</p>
            </div>
            <div className={styles.itemPrice}>
                <p><strong>${price}</strong></p>
            </div>
        </div>
        <div className={styles.rightColumn}>
            <img className={styles.itemImage} src={src} alt={alt} />
        </div>
      </div>
  </div>
  );
};

export default ItemCard;