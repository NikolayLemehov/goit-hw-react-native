import { createContext, useMemo, useState } from 'react';
import {postList} from '../data/postList';

const initContext = {
  posts: postList,
};

export const postsCtx = createContext(initContext);

export default function PostsCtx({children}) {
  const [posts, setPosts] = useState(initContext.posts);

  const providerValue = useMemo(() => (
    {posts, setPosts}),
  [posts]);

  return (
    <postsCtx.Provider value={providerValue}>
      {children}
    </postsCtx.Provider>
  );
}
