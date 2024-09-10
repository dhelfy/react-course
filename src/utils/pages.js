// функция которая подсчитывает кол-во страниц для всех элементов
export function totalPages (totalCount, limit) {
    return (
        Math.ceil(totalCount / limit)
    )
}

// функция которая заполняет массив страниц соответствюущими
// элементами 1, 2, 3...
export function fillPagesArray (array, pages) {
    for (let i = 0; i < pages; i++) {
        array.push(i + 1)
    }
}