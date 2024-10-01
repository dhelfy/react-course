import { NavLink } from "react-router-dom"
import styles from "./NavBar.module.css"
import CstmButton from "../button/CstmButton"
import { useContext } from "react"
import { AuthContext } from "../../../context/context"

export default function NavBar() {
    let active = ({isActive}) => isActive ? `${styles.active_link} ${styles.link}` : styles.link
    let {setIsLogged} = useContext(AuthContext)

    function onLogout() {
        setIsLogged(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className={styles.navbar}>
            <nav className={styles.links}>
                <NavLink to="/" className={active}>Home</NavLink>
                <NavLink to="about" className={active}>About</NavLink>
                <NavLink to="blog" className={active}>Blog</NavLink>
            </nav>
            <CstmButton BtnColor="white" onClick={() => {onLogout()}}>
                Logout
            </CstmButton>
        </div>
    )
}