import Post from "./Post";
import { Post as PostType } from "./PostForm";

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
      {posts.map((post, index) => (
        <Post key={post.id} remove={remove} number={index + 1} post={post} />
      ))}
    </div>
  );
};

export default PostList;
