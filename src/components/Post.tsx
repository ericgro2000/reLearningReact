import MyButton from "./UI/Button/MyButton";
import { Post as PostType } from "../pages/Posts";
import { useNavigate } from "react-router-dom";

interface PostProps {
  number: number;
  post:PostType
  remove: (post: { id:number,title: string; body: string }) => void;
}

const Post: React.FC<PostProps> = ({ post, remove }) => {
  const navigate = useNavigate();

  const handleOpenPost = () => {
    navigate(`/posts/${post.id}`);
  };

  const handleRemovePost = () => {
    remove(post);
  };

  return (
    <div className="post">
      <div className="post__content">
        <strong>{post.id}. {post.title}</strong>
        <div>
          {post.body}
        </div>
      </div>
      <div className="post__btns">
        <MyButton onClick={handleOpenPost}>
          Открыть
        </MyButton>
        <MyButton onClick={handleRemovePost}>
          Удалить
        </MyButton>
      </div>
    </div>
  );
};
export default Post;
