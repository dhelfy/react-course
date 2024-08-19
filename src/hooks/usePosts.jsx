import { useMemo } from "react"

export function useSortedPosts(sort, posts) {
    let sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return posts
    }, [sort, posts])

    return sortedPosts
}

export function usePosts(sort, posts, query) {
    let sortedPosts = useSortedPosts(sort, posts)

    let sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
    }, [sortedPosts, query])

    return sortedAndSearchedPosts
}