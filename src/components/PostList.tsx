import { useGetPostsQuery } from '../services/postService';
import { Link } from 'react-router-dom';

function PostList() {
  const { data, error, isLoading } = useGetPostsQuery();

  if (error) return <div>ERROR: {error}</div>;

  if (isLoading) return <div>Loading...</div>;

  if (data)
    return (
      <div>
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                {post.id}. [{post.author}] {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );

  return <div>List of posts</div>;
}

export default PostList;
