import { useNavigate } from "react-router-dom";
import CstmButton from "../../components/UI/button/CstmButton";
import CstmInput from "../../components/UI/input/CstmInput";
import styles from "./AuthPage.module.css"

export default function AuthPage({ setIsLogged, isLogged }) {
    let navigate = useNavigate();

    function onLogin () {
        setIsLogged(true)
        navigate("/")
    }

    return (
        <div className={styles.auth_page}>
            <div className={styles.auth_window}>
                <h1 className={styles.auth_title}>Authorization</h1>
                <div className={styles.auth_form}>
                    <p>Login</p>
                    <CstmInput placeholder="Login..." />
                    <p>Password</p>
                    <CstmInput type="password" placeholder="Password..."/>
                    <CstmButton onClick={() => { onLogin() }}>Login</CstmButton>
                </div>
            </div>
        </div>
    )
}