import Image from "next/image";
import styles from "./page.module.css";
import React from "react";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div>
          <h1>Testes</h1>
        </div>
      </main>
    </>
  );
}
