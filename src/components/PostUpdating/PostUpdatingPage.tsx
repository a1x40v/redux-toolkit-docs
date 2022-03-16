import { useParams } from 'react-router-dom';

import { useGetPostsQuery } from '../../services/postService';
import PostForm from './PostForm';

function PostUpdatingPage() {
  const { postId } = useParams();

  const { isLoading, post } = useGetPostsQuery(undefined, {
    selectFromResult: ({ data, isLoading }) => ({
      isLoading,
      post: data?.find((p) => p.id === Number(postId)),
    }),
  });

  if (isLoading) return <div>Loading...</div>;

  if (!post) return <div>Post editing page</div>;

  return (
    <div>
      <PostForm post={post} />
    </div>
  );
}

export default PostUpdatingPage;
