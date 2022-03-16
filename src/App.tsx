import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import HomePage from './components/pages/HomePage';
import PostsPage from './components/pages/PostsPage';
import PostDetail from './components/PostDetail';
import PostCachingList from './components/PostsCaching/PostCachingList';
import PostUpdatingPage from './components/PostUpdating/PostUpdatingPage';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/posts">Posts</Link>
          </li>
          <li>
            <Link to="/posts-caching">Caching</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
          <Route path="/posts-caching" element={<PostCachingList />} />
          <Route path="/edit/:postId" element={<PostUpdatingPage />} />
        </Routes>
      </div>
      ;
    </Router>
  );
}

export default App;
