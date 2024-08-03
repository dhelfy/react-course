import styles from './Select.module.css'

export default function CstmSelect({ defValue, selectValue, onChange, options }) {
    return (
        <select value={selectValue} className={styles.cstmSelect} onChange={onChange}>
            {/*Выше задаем select значение из состояния, добавляем слушатель событий*/}
            <option disabled>{defValue}</option>

            {/*превращаем массив в элементы через map*/}
            {options.map(function (option) {
                return (
                    <option key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )
            })}
        </select>
    )
}