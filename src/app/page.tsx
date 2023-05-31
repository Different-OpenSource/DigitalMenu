"use client"
import ItemCard from './components/ItemCard'
import styles from './page.module.css'
import './teste.css'

export default async function Home() {
  return (
    <div className='test-page'>
    <div className='test-container'>
      <ItemCard
        title={"Hamburguer"}
        description={"Alface, tomate, carne em um pão macio com gergelim"}
        price={12}
        src={"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2598&q=80"}
        alt={"hamburguer"}
        handle_click={() => alert("Hamburguer")}
      />
    </div>
    <div className='test-container'>
      <ItemCard   
        title={"Pizza mussarela"}
        description={"Molho de tomate, queijo e manjericão s d asd adasdasd dasnasnsdnaasld"}
        price={55.98}
        src={"https://images6.alphacoders.com/130/1308388.jpeg"}
        alt={"Pizza"}
        handle_click={() => alert("Pizza")}
      />
    </div>
    <div>
      <ItemCard   
        title={"Fettuccine ao molho sugo"}
        description={"Fettuccine, molho de tomate e parmesão."}
        price={35.80}
        src={"https://img.freepik.com/fotos-gratis/estilo-de-vida-alimento-massas-gostoso-gourmet_1350-50.jpg?w=1380&t=st=1685481129~exp=1685481729~hmac=4fde46a11edf920f29ce04ff2b4e48cfa79fea75667c87e7fc85869bff2f4a94"}
        alt={"Pizza"}
        handle_click={() => alert("Fettuccine")}
      />
    </div>
  </div>
  )
}
