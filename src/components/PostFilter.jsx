import CstmSelect from './UI/select/CstmSelect'
import CstmInput from './UI/input/CstmInput'

export default function PostFilter({ filter, setFilter }) {
    return (
        <div className="search_bar">
            <CstmSelect defValue='Sort by'
                selectValue={filter.sort} onChange={(event) => { setFilter({ ...filter, sort: event.currentTarget.value }) }}
                options={[
                    { name: 'Title', value: 'title' },
                    { name: 'Content', value: 'body' }
                ]}
            />

            <CstmInput placeholder='Search' name='search' value={filter.query} onChange={(event) => { setFilter({ ...filter, query: event.currentTarget.value }) }} />
        </div>
    )
}