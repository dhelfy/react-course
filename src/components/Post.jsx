import CstmButton from "./UI/button/CstmButton"

export default function Post(props) {
    return (
        <>
            <div className="Post">
                <h2 className="PostTitle">{props.post_info.title}</h2>
                <p className="PostContent">{props.post_info.content}</p>
                <CstmButton BtnColor="black" onClick={() => props.deletePost(props.post_info)}>Delete</CstmButton>
            </div>
        </>
    )
}