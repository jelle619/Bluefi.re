import Link from 'next/link'
import styles from "./text.module.css"

export default function Text({children}) {
    return (
        <div className={styles.text}>
            { children }
        </div>
    );
}