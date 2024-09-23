## Хук useFetching

``` jsx
import { useState } from "react"

export function useFetching(callback) {
    let [isLoading, setIsLoading] = useState(false)
    let [error, setError] = useState('')

    let fetching = async () => {
        try {
            setIsLoading(true)
            await callback()
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false)
        }
    }

    return [isLoading, error, fetching]
}
```

На вход принимает функцию колбэк

### Принцип работы

1. Создается два состояния, `isLoading` и `error`, первое нужно для отслеживания статуса загрузки данных, второе для хранения ошибки.

2. Далее срабатывает асинхронная функция `fetching`, она устанавливает статус загрузки данных на `true` и вызывает переданный колбэк

3. Далее если происходит ошибка при вызове колбэка, то она кладется в состояние ошибки, а также при любом исходе состояние загрузки переводится в состояние `false`

Из хука возвращаются три сущности: `isLoading`, `error` и функция `fetching`

Чтобы заставить отработать колбэк нужно вызвать функцию `fetching`

Пример:

``` jsx
  let [isLoading, error, fetching] = useFetching(async () => {
        // что-то делаем и передаем в хук тот самый колбэк
  })

  useEffect(() => {
    fetchPosts() // вызываем переданный колбэк при первом рендере страницы
  }, [])
```