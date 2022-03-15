import { useGetPostsQuery } from './services/postService';
import './App.css';

function App() {
  const { data, error, isLoading } = useGetPostsQuery();

  if (error) return <div>ERROR: {error}</div>;

  if (isLoading) return <div>Loading...</div>;

  if (data)
    return (
      <div>
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              {post.id}. [{post.author}] {post.title}
            </li>
          ))}
        </ul>
      </div>
    );

  return <div className="App"></div>;
}

export default App;
