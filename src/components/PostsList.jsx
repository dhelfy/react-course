import Post from "./Post"

export default function PostsList({ posts, deletePost }) {
    let posts_list = posts.map(function (post) { return (<Post post_info={post} key={post.id} deletePost={deletePost}/>) })

    return (
        <>
            <h1>Posts list</h1>
            {posts_list}
        </>
    )
}