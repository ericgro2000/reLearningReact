import { useState, useEffect, useRef } from "react";
import Post from "../components/Post";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/Modal/MyModal";
import MyButton from "../components/UI/Button/MyButton";
import { usePosts } from "../hooks/usePost";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/MyLoader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/Pagination/MyPagination";
import { useObserver } from "../hooks/useObservert";
import MySelect from "../components/UI/Select/MySelect";

export interface Post {
  userId?: number
  id: number;
  title: string;
  body: string;
}

function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);

  const [filter, setFilter] = useState<{ sort: string; query: string }>({
    sort: '',
    query: '',
  });

  const [modal, setModal] = useState<boolean>(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [totalPages, setTotalPages] = useState<number>(0);

  const [limit, setLimit] = useState<number|string>(10);

  const [page, setPage] = useState<number>(1);

  const lastElement = useRef<HTMLDivElement>(null)

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
})
  useEffect(() => {
    fetchPosts(limit, page)
}, [page, limit])

  const createPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post: Post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const changePage = (page:number) => {
    setPage(page)
}

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Beitrag erstellen
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue="Anzahl der Elemente pro Seite"
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'Alle anzeigen'},
                ]}
            />
      {postError &&
      <h1 style={{display: 'flex', justifyContent: 'center', marginTop: 30, marginBottom:30}}>Fehler{postError}</h1>
      }
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Beiträge"
      />
      <div ref={lastElement} style={{height: 20, visibility: "hidden"}}/>
      {isPostsLoading&&<div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>}
      <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
    </div>
  );
}

export default Posts;