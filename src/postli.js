import './elcss.css'
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function PostList() {
  const posts = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'FETCH_POSTS', payload: data });
      });
  }, [dispatch]);

  return (
    <div className="post-list">
      <h1 className="post-list__heading">Los Posts</h1>
      <ul className="post-list__items">
        {posts.map(post => (
          <li key={post.id} className="post-list__item">
            <h2 className="post-list__item-title">{post.title}</h2>
            <p className="post-list__item-body">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
