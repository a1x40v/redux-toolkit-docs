import { useState } from 'react';

import { useUpdatePostMutation } from '../../services/postService';
import { Post } from '../../services/types';

interface Props {
  post: Post;
}

interface FormState {
  title: string;
  author: string;
}

function PostForm({ post }: Props) {
  const { author, title } = post;
  const [state, setState] = useState<FormState>({ author, title });
  const [updatePost, result] = useUpdatePostMutation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    updatePost({ ...state, id: post.id }).then(() => console.log('updated!'));
  };

  if (result.isLoading) return <div>Loading...</div>;

  return (
    <form onSubmit={handleSubmit}>
      <h2>PostForm</h2>
      <p>
        <label htmlFor="postAuthor">Author: </label>
        <input
          type="text"
          id="postAuthor"
          value={state.author}
          onChange={(event) =>
            setState({ ...state, author: event.target.value })
          }
        />
      </p>

      <p>
        <label htmlFor="postTitle">Title: </label>
        <input
          type="text"
          id="postTitle"
          value={state.title}
          onChange={(event) =>
            setState({ ...state, title: event.target.value })
          }
        />
      </p>
      <button type="submit">Send</button>
    </form>
  );
}

export default PostForm;
