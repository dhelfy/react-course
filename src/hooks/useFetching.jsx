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