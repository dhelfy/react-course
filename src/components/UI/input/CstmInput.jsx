import styles from "./Input.module.css"

export default function CstmInput({ value, onChange, ...props}) {
    return(
        <>
            <input {...props} className={styles.CstmInput} value={value}
             onChange={onChange}></input>
        </>
    )
}