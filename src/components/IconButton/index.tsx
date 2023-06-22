import styles from './styles.module.css';

interface IconButtonProps {
    path: string;
    onClick: () => void;
}

function IconButton({ path, onClick }: IconButtonProps) {
    return (
        <div className={styles.roundedBtn}>
            <a onClick={onClick}>
                <img src={path} alt="Icon button" />
            </a>
        </div>
    );
};

export default IconButton;
