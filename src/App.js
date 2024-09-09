import "./styles/styles.css"
import PostsList from "./components/PostsList";
import PostForm from "./components/PostForm/PostForm";
import { useState, useEffect } from "react";
import { usePosts } from "./hooks/usePosts";
import { useFetching } from "./hooks/useFetching";
import PostFilter from "./components/PostFilter";
import CstmButton from "./components/UI/button/CstmButton";
import CstmModal from "./components/UI/modal/CstmModal";
import PostService from "./API/PostService";
import Loader from "./components/UI/loader/Loader";
import { totalPages, fillPagesArray } from "./utils/pages";

function App() {
  // массив постов и его состояние
  let [posts, setPosts] = useState([])

  // состояние для поиска и типа сортировки
  let [filter, setFilter] = useState({ sort: '', query: '' })

  // состояние для видимости модального окна
  let [modalVisible, setModalVisible] = useState(false)

  // текущая страница для постов
  let [currentPage, setCurrentPage] = useState(1)

  // кол-во страниц
  let [pages, setPages] = useState()

  let [limit, setLimit] = useState(10)

  let pages_array = []

  // фетчим посты + проверяме их загрузку + получаем ошибку если есть
  let [postLoading, postError, fetchPosts] = useFetching(async () => {
    let posts = await PostService.getAll(limit, currentPage)
    let totalCount = posts.headers['x-total-count']
    setPosts(posts.data)
    setPages(totalPages(totalCount, limit))
  })

  fillPagesArray(pages_array, pages)

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

  // useEffect, выполнится единожды, только при первом рендере
  useEffect(() => {
    fetchPosts()
  }, [currentPage])

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
      {postError && <h1>{postError}</h1>}
      {postLoading ? <Loader /> : <PostsList posts={searchedAndSortedPosts} deletePost={deletePost} />}

      <div className="pages_wrapper">
        {pages_array.map((page, i) => {
          return(
            <p key={i} id={i+1} className={i+1==currentPage ? "page_active" : "page"} onClick={(event) => {
              setCurrentPage(event.currentTarget.id)
            }}>

              {i + 1}

            </p>
          )
        })}
      </div>

    </div>
  );
}

export default App;