import styles from "./Button.module.css"

export default function CstmButton({ BtnColor, children, ...props}) {
    let classes = styles[BtnColor] + ' ' + styles.cstmButton

    return(
        <>
            <button className={classes} {...props}>{children}</button>
        </>
    )
}