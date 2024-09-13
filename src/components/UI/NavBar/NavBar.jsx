import { NavLink } from "react-router-dom"
import styles from "./NavBar.module.css"

export default function NavBar() {
    let active = ({isActive}) => isActive ? `${styles.active_link} ${styles.link}` : styles.link

    return (
        <>
            <nav className={styles.navbar}>
                <NavLink to="/" className={active}>Home</NavLink>
                <NavLink to="about" className={active}>About</NavLink>
                <NavLink to="blog" className={active}>Blog</NavLink>
            </nav>
        </>
    )
}