import { useState, useEffect } from "react";

const useComments = ( postId, user ) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
    console.log()
  useEffect(() => {
    const fetchComments = async () => {
      try {
        // Update the fetch URL to match the new route
        const response = await fetch(`https://community-api-gamma.vercel.app/api/comment/${postId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`,
            },
        });
        
        if (!response.ok) throw new Error('Failed to fetch comments');
        const data = await response.json();
        setComments(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchComments();
  }, [postId]);

  const addComment = async (content, userId) => {
    try {
      // Update the fetch URL to match the new route
      const response = await fetch(`https://community-api-gamma.vercel.app/api/comment/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`,

        },
        body: JSON.stringify({
          c_user_id: userId,
          c_post_id: postId,
          c_content: content,
        }),
      });

      if (!response.ok) throw new Error('Failed to add comment');
      const newComment = await response.json();
      setComments([...comments, newComment]);
    } catch (err) {
      setError(err.message);
    }
  };

  return { comments, loading, error, addComment };
};

export default useComments;
