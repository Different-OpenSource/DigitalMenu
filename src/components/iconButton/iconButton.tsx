import styles from './iconButton.module.css'

function IconButton({ path, onClick }) {
    return (
        <div className={styles.roundedBtn}>
            <a onClick={onClick}>
                <img src={path} />
            </a>
        </div>
    )
}

export default IconButton;
