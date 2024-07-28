import styles from "./Button.module.css"

export default function CstmButton({ children, ...props}) {
    let classes = styles[props.BtnColor] + ' ' + styles.cstmButton

    return(
        <>
            <button className={classes} {...props}>{children}</button>
        </>
    )
}