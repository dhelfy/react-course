import Post from "./Post"

export default function PostsList({ posts, deletePost }) {
    let posts_list = posts.map(function (post) { return (<Post post_info={post} key={post.id} deletePost={deletePost}/>) })
    if (!posts.length) {
        return <h1>There is not a single post yet</h1>
    }

    return (
        <>
            <h1>Posts list</h1>
            {posts_list}
        </>
    )
}