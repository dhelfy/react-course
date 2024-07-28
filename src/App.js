import "./styles/styles.css"
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm/PostForm";
import CstmSelect from "./components/UI/select/CstmSelect";
import { useState } from "react";

function App() {
  let [posts, setPosts] = useState([
    { id: 1, title: 'I ate fish', content: 'I ate fish tomorrow. What did you eat guys?' },
    { id: 2, title: 'Learning React', content: 'This content took from props!' },
    { id: 3, title: 'Another post', content: 'Oh, im so tired of thinking of what to write...' }
  ])

  function createPost(newPost) {
    setPosts([...posts, newPost])
  }

  function deletePost(post) {
    setPosts(posts.filter(item => item.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>

      <CstmSelect defValue={'Sort by'} 
      options={[
        {name: 'Title', value: 'title'},
        {name: 'Content', value: 'content'} ]}/>

      {posts.length <= 0 ? <h1>There is not a single post yet :(</h1> : <PostsList posts={posts} deletePost={deletePost}/>}
    </div>
  );
}

export default App;