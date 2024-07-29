import styles from './Select.module.css'

export default function CstmSelect({ defValue, selectValue, postSort, options }) {
    return (
        <select value={selectValue} className={styles.cstmSelect} onChange={(event) => {postSort(event.currentTarget.value)}}>
            <option disabled className={styles.cstmOption}>{defValue}</option>

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