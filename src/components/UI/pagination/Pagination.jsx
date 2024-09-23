import styles from "./Pagination.module.css"

// принимаем на вход начальный массив, номерт текущей страницы и сеттер текущей страницы
export default function Pagination({ initial_arr, currentPage, setCurrentPage }) {
    return (
        <div className={styles.pages_wrapper}>
            {/* маппимся по массиву и превращаем его в кнопочки для страниц */}
            {initial_arr.map((page, i) => {
                return (
                    <p key={i} id={i + 1} className={i + 1 === currentPage ? `${styles.page_active} ${styles.page}` : styles.page} onClick={(event) => {
                        setCurrentPage(parseInt(event.currentTarget.id, 10))
                    }}>

                        {i + 1}

                    </p>
                )
            })}
        </div>
    )
}