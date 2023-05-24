import Image from "next/image";
import styles from './styles.module.css';
import SearchIcon from './search-icon.webp'

function SearchBarFunction() {
    
}

function buttonClick() {
    console.log('buttonClick');
}

function Header(): React.JSX.Element {
    return(
    <header className={styles.container}>
        <div className={styles.searchButtonBox}>
            <div>
                <Image style={{width: "30px", height:"30px"}} src={SearchIcon} alt={""}/>
            </div>
            <div>
                <h1>DigitalMenu</h1>
            </div>
            <span></span>
        </div>
        {/* <button>Teste</button> */}
    </header>
    );
}

// const btn = document.querySelector("searchButton");
// btn?.addEventListener("click", SearchBarFunction);

export default Header;