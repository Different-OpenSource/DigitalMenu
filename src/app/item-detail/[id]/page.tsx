"use client"
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss';
import { itemList } from 'mocks/item';
import { Item } from 'interfaces/item';

export default function ItemDetailPage({ params }: { params: { id: string } }) {
  const [currentItem, setCurrentItem] = useState<Item>();

  useEffect(() => {
    setCurrentItem(itemList.find(item => item.id == params.id));
  }, [params.id])

  return (
    <>
      {
        currentItem ?
          <div className={styles.itemPageContainer}>
            <div className={styles.itemDetails}>
              <div className={styles.itemImage}>
                <Image src={currentItem?.image} alt="Item picture" width={50} height={50}/>
                <div className={styles.itemTitle}>
                  <span>
                    {currentItem?.title}
                  </span>
                </div>
                <div className={styles.itemDescription}>
                  <span>
                    {currentItem?.description}
                  </span>
                </div>
                <div className={styles.itemPrice}>
                  <span>
                    $ {currentItem?.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
          : 
          <div>Item não encontrado</div>
      }
    </>
  )
}
