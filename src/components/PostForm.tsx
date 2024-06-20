import { useState } from "react";
import MyInput from "./UI/Input/MyInput";
import MyButton from "./UI/Button/MyButton";

export interface Post {
  id?: number;
  title: string;
  body: string;
}

interface PostFormProps {
  create: (post: Post) => void;
}

const PostForm: React.FC<PostFormProps> = ({ create }) => {
  const [post, setPost] = useState<Post>({ title: "", body: "" });

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
        placeholder="Название поста"
      />
      <MyInput
        value={post.body}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPost({ ...post, body: e.target.value })
        }
        type="text"
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
