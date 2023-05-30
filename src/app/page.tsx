"use client"
import ItemCard from './components/ItemCard'
import styles from './page.module.css'

export default async function Home() {
  return (
    <div>
      <h1>Hello govnah</h1>
      <ItemCard   
      title={"asda"}
      description={"asda"}
      price={12}
      src={"asda"}
      alt={"asda"}
      handle_click={() => alert("SK")}
      />
    </div>
  )
}
