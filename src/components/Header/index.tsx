'use client';
import React from "react";
import Link from "next/link";
import styles from './styles.module.css';
import SearchIcon from "../SearchIcon";

function SearchBarFunction() {
    alert('SearchBarFunction');
}

function Header(): React.JSX.Element {
    return(
    <header className={styles.container}>
        <div className={styles.searchButtonBox}>
            <div>
                <SearchIcon onClick={() => SearchBarFunction()}/>
            </div>
            <div>
                <Link href={"/"}>
                    <h1>DigitalMenu</h1>
                </Link>
            </div>
            <span></span>
        </div>
    </header>
    );
}

export default Header;