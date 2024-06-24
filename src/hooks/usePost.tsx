import { useMemo } from "react";
import { Post as PostType } from "../App";

export const useSortedPosts = (posts: PostType[], sort: string | null) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => a[sort]!.localeCompare(b[sort]!));
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (
  posts: PostType[],
  sort: string | null,
  query: string,
) => {
  const sortedPosts = useSortedPosts(posts, sort);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, sortedPosts]);

  return sortedAndSearchedPosts;
};
