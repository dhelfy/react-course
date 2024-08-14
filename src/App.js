import "./styles/styles.css"
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm/PostForm";
import { useMemo, useState } from "react";
import PostFilter from "./components/PostFilter";

function App() {
  // массив постов и его состояние
  let [posts, setPosts] = useState([
    { id: 1, title: 'I ate fish', content: 'I ate fish yesterday. What did you eat guys?' },
    { id: 2, title: 'Learning React', content: 'This content took from props!' },
    { id: 3, title: 'Another post', content: 'Oh, im so tired of thinking of what to write...' }
  ])

  let [filter, setFilter] = useState({sort: '', query: ''})

  // колбэк для создания поста в массив постов, используется в PostForm
  function createPost(newPost) {
    setPosts([...posts, newPost])
  }

  // колбэк для удаления поста, передается в PostList
  // и присваевается к кнопке в посте
  function deletePost(post) {
    setPosts(posts.filter(item => item.id !== post.id))
  }

  // массив сортированных постов
  let sortedPosts = useMemo(() => {
    console.log('отработала функция')
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts
  }, [filter.sort, posts])

  let searchedAndSortedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [sortedPosts, filter.query])

  return (
    <div className="App">
      <PostForm create={createPost} />

      <hr></hr>

      <PostFilter filter={filter} setFilter={setFilter}/>

      <PostsList posts={searchedAndSortedPosts} deletePost={deletePost} />
    </div>
  );
}

export default App;