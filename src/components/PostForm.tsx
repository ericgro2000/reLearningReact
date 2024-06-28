import { useState } from "react";
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";
import { Post } from "../pages/Posts";

interface PostFormProps {
  create: (post: Post) => void;
}

const PostForm: React.FC<PostFormProps> = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: Post = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPost({ ...post, title: e.target.value })
        }
        type="text"
        placeholder="Titel des Beitrags"
      />
      <MyInput
        value={post.body}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPost({ ...post, body: e.target.value })
        }
        type="text"
        placeholder="Posten Beschreibung"
      />
      <MyButton onClick={addNewPost}>Einen Beitrag erstellen</MyButton>
    </form>
  );
};

export default PostForm;
