import "./styles/styles.css"
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm/PostForm";
import CstmSelect from "./components/UI/select/CstmSelect";
import { useState } from "react";

function App() {
  // массив постов и его состояние
  let [posts, setPosts] = useState([
    { id: 1, title: 'I ate fish', content: 'I ate fish yesterday. What did you eat guys?' },
    { id: 2, title: 'Learning React', content: 'This content took from props!' },
    { id: 3, title: 'Another post', content: 'Oh, im so tired of thinking of what to write...' }
  ])

  // состояние CstmSelect, изначально пустая строка
  let [selectValue, setSelectValue] = useState('')

  // колбэк для создания поста в массив постов, используется в PostForm
  function createPost(newPost) {
    setPosts([...posts, newPost])
  }

  // колбэк для удаления поста, передается в PostList
  // и присваевается к кнопке в посте
  function deletePost(post) {
    setPosts(posts.filter(item => item.id !== post.id))
  }

  // функция сортировки постов
  // используется в CstmSelect
  function postSort(sort) {
    setSelectValue(sort)

    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost} />

      <hr></hr>

      <CstmSelect defValue='Sort by'
        selectValue={selectValue} onChange={(event) => {postSort(event.currentTarget.value)}}
        options={[
          { name: 'Title', value: 'title' },
          { name: 'Content', value: 'content' }
        ]}
      />

      {/* условная отрисовка, если массив постов содержит хотябы один эллемент, то отрисуются посты */}
      {/* если постов нет, то выведется заголовок */}
      {posts.length <= 0 ? <h1>There is not a single post yet</h1> : <PostsList posts={posts} deletePost={deletePost} />}
    </div>
  );
}

export default App;