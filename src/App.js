import "./styles/styles.css"
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm/PostForm";
import { useState, useEffect } from "react";
import { usePosts } from "./hooks/usePosts";
import PostFilter from "./components/PostFilter";
import CstmButton from "./components/UI/button/CstmButton";
import CstmModal from "./components/UI/modal/CstmModal";
import PostService from "./API/PostService";

function App() {
  // массив постов и его состояние
  let [posts, setPosts] = useState([])

  // состояние для поиска и типа сортировки
  let [filter, setFilter] = useState({ sort: '', query: '' })

  // состояние для видимости модального окна
  let [modalVisible, setModalVisible] = useState(false)

  // состояние загрузки чего либо
  let [isLoading, setIsLoading] = useState(false)

  // колбэк для создания поста в массив постов, используется в PostForm
  function createPost(newPost) {
    setPosts([...posts, newPost])
    setModalVisible(false)
  }

  // колбэк для удаления поста, передается в PostList
  // и присваевается к кнопке в посте
  function deletePost(post) {
    setPosts(posts.filter(item => item.id !== post.id))
  }

  // функция загрузки постов с сервера
  async function fetchPosts () {
    setIsLoading(true)
    let posts = await PostService.getAll()
    setPosts(posts)
    setIsLoading(false)
  }

  // useEffect, выполнится единожды, только при первом рендере
  useEffect(() => {
    fetchPosts()
  }, [])

  // сортированные посты и посты подходящие под поиск
  let searchedAndSortedPosts = usePosts(filter.sort, posts, filter.query)

  return (
    <div className="App">

      {/* модалка */}
      <CstmModal visible={modalVisible} setVisible={setModalVisible}>
        <PostForm create={createPost} />
      </CstmModal>

      {/* поиск, сортировка и создание постов */}
      <h1>Posts list</h1>
      <div style={{ display: 'flex', width: '100%', gap: '5px' }}>
        <CstmButton BtnColor={'white'} onClick={(event) => { setModalVisible(true) }}>
          Create
        </CstmButton>
        <PostFilter filter={filter} setFilter={setFilter} />
      </div>

      {/* сами посты */}
      {isLoading ? <h1>Loading...</h1> : <PostsList posts={searchedAndSortedPosts} deletePost={deletePost} />}

    </div>
  );
}

export default App;