export function totalPages (totalCount, limit) {
    return (
        Math.ceil(totalCount / limit)
    )
}

export function fillPagesArray (array, pages) {
    for (let i = 0; i < pages; i++) {
        array.push(i + 1)
    }
}