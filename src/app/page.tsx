import Image from 'next/image'
import styles from './page.module.css'
import Header from './components/Header'

export default function Home() {
  return (
    <Header>
    <main className={styles.main}>
      <div className="header-title"><h1>Testes</h1></div>
      </main>
    </Header>
  )
}
