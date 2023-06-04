"use client"
import { useEffect, useState } from 'react'
import styles from './styles.module.scss';
import { itemList } from '../../../mocks/item';
import { Item } from '@/app/models/item';

export default function ItemDetailPage({ params }: { params: { id: string } }) {
  const [currentItem, setCurrentItem] = useState<Item>();

  useEffect(() => {
    setCurrentItem(itemList.find(item => item.id == params.id));
  }, [])

  return (
    <>
      {
        currentItem ?
          <div className={styles.itemPageContainer}>
            <div className={styles.itemDetails}>
              <div className={styles.itemImage}>
                <img src={currentItem?.image} />
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
