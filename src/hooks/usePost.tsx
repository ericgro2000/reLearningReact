import { useMemo } from "react";
import { Post as PostType } from "../App";

export const useSortedPosts = (posts: PostType[], sort: string | null) => {
  const sortedPosts = useMemo(() => {
    if (sort) {
      return [...posts].sort((a, b) => {
        const propA = a[sort as keyof PostType];
        const propB = b[sort as keyof PostType];

        if (typeof propA === 'string' && typeof propB === 'string') {
          return propA.localeCompare(propB);
        }

        if (typeof propA === 'number' && typeof propB === 'number') {
          return propA - propB;
        }

        return 0;
      });
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