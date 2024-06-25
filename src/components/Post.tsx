import MyButton from "./UI/Button/MyButton";
import { Post as PostType } from "../App";

interface PostProps {
  number: number;
  post:PostType
  remove: (post: { id:number,title: string; body: string }) => void;
}

const Post: React.FC<PostProps> = (props) => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default Post;
