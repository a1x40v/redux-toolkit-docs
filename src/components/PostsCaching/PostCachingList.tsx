import { useState, useEffect } from 'react';
import PostCachingDetali from './PostCachingDetali';

function PostCachingList() {
  const [posts, setPosts] = useState<number[]>([1]);

  useEffect(() => {
    setTimeout(() => {
      setPosts((prev) => [...prev, 1]);
    }, 1500);

    setTimeout(() => {
      setPosts((prev) => [...prev, 2]);
    }, 3000);
  }, []);

  return (
    <div>
      <h1>PostCaching</h1>
      <ul>
        {posts.map((post, idx) => (
          <li key={idx}>
            <PostCachingDetali postId={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostCachingList;
