import React from 'react';
import Image from "next/image";
import styles from './styles.module.css';
import Link from 'next/link';

interface SearchIconInterface {
    onClick:() => void;
}

const SearchIcon:React.FC<SearchIconInterface> = ({ onClick }) => {
    return (
        <Link href={"/"}>
            <div onClick={onClick} className={styles.searchButtonBox}>
                <Image width={30} height={30} src={'/assets/icons/search-icon.webp'} alt={""}/>
            </div>
        </Link>
    );
}

export default SearchIcon;
