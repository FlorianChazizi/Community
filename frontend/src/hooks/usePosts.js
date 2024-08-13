// src/hooks/usePosts.js

import { useState, useEffect } from 'react';

export const usePosts = (communityName, user) => {
  const [posts, setPosts] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postContent, setPostContent] = useState('');
  const [postError, setPostError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://community-api-gamma.vercel.app/api/post/community/${communityName}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${user.token}`,
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const postsData = await response.json();
        setPosts(postsData);
      } catch (err) {
        console.error('Error fetching posts:', err.message);
        setPostError(err.message);
      }
    };

    fetchPosts();
  }, [communityName, user]);

  const createPost = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://community-api-gamma.vercel.app/api/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({ p_title: postTitle, p_content: postContent, communityName })
      });

      if (!response.ok) {
        throw new Error('Failed to create post');
      }

      const newPost = await response.json();
      setPosts([...posts, newPost]);
      setPostTitle('');
      setPostContent('');
      setPostError(null);

    } catch (err) {
      setPostError(err.message);
    }
  };

  return {
    posts,
    postTitle,
    postContent,
    postError,
    setPostTitle,
    setPostContent,
    createPost,
  };
};
