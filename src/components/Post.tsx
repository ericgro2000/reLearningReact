import MyButton from "./UI/Button/MyButton";

interface PostProps {
  number: number;
  post: {
    title: string;
    body: string;
  };
  remove: (post: { title: string; body: string }) => void;
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
