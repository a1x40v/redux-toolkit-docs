import { Routes, Route, Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import HomePage from './components/pages/HomePage';
import PostsPage from './components/pages/PostsPage';
import PostDetail from './components/PostDetail';

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
        </ul>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:postId" element={<PostDetail />} />
        </Routes>
      </div>
      ;
    </Router>
  );
}

export default App;
