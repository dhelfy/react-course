export default function CstmSelect ({defValue, options}) {
    return (
        <select>
            <option disabled>{defValue}</option>
            {options.map(option => <option value={option.value}>{option.name}</option>)} 
        </select>
    )
}