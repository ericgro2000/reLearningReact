import Post from "./Post";
import { Post as PostType } from "../App";
import { CSSTransition, TransitionGroup } from "react-transition-group";

interface PostListProps {
  posts: PostType[];
  title: string;
  remove: (post: PostType) => void;
}

const PostList: React.FC<PostListProps> = ({ posts, title, remove }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не найдены!</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <Post remove={remove} number={index + 1} post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default PostList;
