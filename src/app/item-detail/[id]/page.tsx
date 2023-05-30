"use client"
import { useEffect, useState } from 'react'
import './page.scss'
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
          <div className='item-page-container'>
            <div className='item-details'>
              <div className='item-image'>
                <img src={currentItem?.image} />
                <div className='item-title'>
                  <span>
                    {currentItem?.title}
                  </span>
                </div>
                <div className='item-description'>
                  <span>
                    {currentItem?.description}
                  </span>
                </div>
                <div className='item-price'>
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
