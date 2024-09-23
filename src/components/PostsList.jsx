import { CSSTransition, TransitionGroup } from "react-transition-group"
import Post from "./Post/Post"

export default function PostsList({ posts, deletePost, openPost, ...props}) {
    let posts_list = posts.map(function (post) { 
        return (
            <CSSTransition key={post.id} classNames="item" timeout={500}>
                <Post 
                    post_info={post} deletePost={deletePost} openPost={openPost} 
                />
            </CSSTransition>
        ) 
    })
    if (!posts.length) {
        return <h1>There is not a single post yet</h1>
    }

    return (
        <TransitionGroup>
            {posts_list}
        </TransitionGroup>
    )
}