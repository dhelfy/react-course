import styles from "./Button.module.css"

export default function CstmButton({ BtnColor, children, ...props}) {
    let classes = BtnColor ? styles[BtnColor] + ' ' + styles.cstmButton : styles.black + ' ' + styles.cstmButton

    return(
        <>
            <button className={classes} {...props}>{children}</button>
        </>
    )
}