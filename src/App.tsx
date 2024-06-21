import React, { useState, useMemo } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import Post from "./components/Post";
import "./styles/App.css";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";

interface Post {
  id?: number;
  title: string;
  body: string;
}

function App() {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: "Javascript", body: "use ts instead" },
    { id: 2, title: "Python", body: "best language" },
    { id: 3, title: "godot", body: "best engine" },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort]),
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase()),
    );
  }, [filter.query, sortedPosts]);

  const createPost = (newPost: Post) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: Post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Посты про ЈЅ"
      />
    </div>
  );
}

export default App;
