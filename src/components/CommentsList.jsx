import { useState } from "react";
import Comment from "./Comment/Comment";

export default function CommentList ({comments, ...props}) {

    let comments_list = comments.map(function(comment) {
        return <Comment title={comment.name} content={comment.body} email={comment.email} key={comment.id}/>
    })

    return (
        <>
            {comments_list}
        </>   
    )
}