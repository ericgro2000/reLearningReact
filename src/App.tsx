import { useState, useEffect } from "react";
import Post from "./components/Post";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/Modal/MyModal";
import MyButton from "./components/UI/Button/MyButton";
import { usePosts } from "./hooks/usePost";
import PostService from "./API/PostService";
import Loader from "./components/UI/Loader/MyLoader";
import { useFetching } from "./hooks/useFetching";

export interface Post {
  userId?: number
  id: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const [modal, setModal] = useState(false);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts,isPostLoading,postError] = useFetching(async()=>{const response = await PostService.getAll();
    if (response) {
      const fetchedPosts: Post[] = response.data;
      setPosts(fetchedPosts);
    }})

    
  useEffect(()=>{fetchPosts()},[])

  const createPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post: Post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

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
      {postError &&
      <h1 style={{display: 'flex', justifyContent: 'center', marginTop: 30, marginBottom:30}}>Fehler{postError}</h1>
      }
      {isPostLoading?<div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>:<PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Beiträge"
      />}
    </div>
  );
}

export default App;
