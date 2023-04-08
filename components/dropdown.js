import Link from 'next/link'
import styles from "./dropdown.module.css"

export default function Dropdown({children}) {
    return (
        <div className={styles.dropdown}>
            { children }
        </div>
    );
}