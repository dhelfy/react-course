import styles from './Modal.module.css'

export default function CstmModal ({visible, setVisible, ...props}) {
    let classes = [styles.modal]

    if (visible === true) {
        classes.push(styles.modal_active)
    } else {
        classes = [styles.modal]
    }

    return(
        <div className={classes.join(' ')} onClick={() => {setVisible(false)}}>
            <div className={styles.content} onClick={(event) => {event.stopPropagation()}}>
                {props.children}
            </div>
        </div>
    )
}