import React from "react";
import './ItemCard.css'
import Link from "next/link";

interface ItemCardProps {
    title: string;
    description: string;
    price: number;
    src: string,
    alt: string

}

const ItemCard: React.FC<ItemCardProps> = ({
    title,
    description,
    price,
    src,
    alt,
}) => {

    return (
        <div className="item-card" data-next-server-root>
            <Link href="/outra-pagina">
                <div className="item-card-inside-div">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <p>Price: ${price}</p>
                    <img src={src} alt={alt} />
                </div>
            </Link>
        </div>
    );
};

export default ItemCard;