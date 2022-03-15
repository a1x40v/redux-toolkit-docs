import { useParams } from 'react-router-dom';

import { useGetPostsQuery } from '../services/postService';

function PostDetail() {
  const { postId } = useParams();

  const { post, isLoading } = useGetPostsQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      isLoading,
      post: data?.find((post) => post.id === Number(postId)),
    }),
  });

  if (isLoading) return <div>Loading post...</div>;

  return (
    <div>
      <h3>Details for post {post?.title}</h3>
      <p>{post?.author}</p>
    </div>
  );
}

export default PostDetail;
