import styles from "./Input.module.css"

export default function CstmInput({inputClass, value, onChange, ...props}) {
    return(
        <>
            <input {...props} className={`${styles[inputClass]}`} value={value}
             onChange={onChange}></input>
        </>
    )
}