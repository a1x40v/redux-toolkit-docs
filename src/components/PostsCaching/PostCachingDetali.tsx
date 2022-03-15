import { useGetPostByIdQuery } from '../../services/postService';

interface Props {
  postId: number;
}

function PostCachingDetali({ postId }: Props) {
  const { data, isLoading, isFetching } = useGetPostByIdQuery(postId);

  if (isLoading) return <div>IsLoading...</div>;
  if (isFetching) return <div>IsFetching...</div>;

  return (
    <span>
      {data?.id} {data?.title} ({data?.author})
    </span>
  );
}

export default PostCachingDetali;
