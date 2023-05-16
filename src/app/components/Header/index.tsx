import Image from "next/image";
import styles from './header.module.css';
import SearchIcon from './public/assets/icons/search-svgrepo-com.svg';

function Header(): React.JSX.Element {
    return(
    <header className={styles.container}>
        <div><img src={SearchIcon}/></div>
        <h1>DigitalMenu</h1>
    </header>
    );
}

export default Header;