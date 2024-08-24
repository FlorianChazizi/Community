import React, { useState } from 'react';
import useComments from '../hooks/useComments';
import { useAuthContext } from '../hooks/useAuthContext';



const CommentsSection = ({ postId }) => {
    const { user } = useAuthContext();

  const { comments, loading, error, addComment } = useComments(postId, user);
  const [newComment, setNewComment] = useState('');

  console.log(user.id)

  const handleAddComment = async () => {
    if (!user || !user.id) {
      console.error('User is not defined or user._id is missing');
      return;
    }
    if (newComment.trim() === '') return;
    await addComment(newComment, user.id);
    setNewComment('');
  };

  return (
    <div className="mt-4">
      <h4 className="text-lg font-semibold">Comments</h4>
      {loading && <p>Loading comments...</p>}
      {error && <p className="text-red-500">Error loading comments: {error}</p>}

      {!loading && comments.length === 0 && (
        <p>No comments yet. Be the first to comment!</p>
      )}

      {!loading && comments.length > 0 && (
        <ul className="space-y-2 mt-2">
          {comments.map(comment => (
            <li key={comment._id} className="border-b pb-2">
              <p>{comment.c_content}</p>
              <p className="text-xs text-gray-500">by {comment.c_user_id.username}</p>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-2">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full border rounded p-2"
          placeholder="Write a comment..."
        ></textarea>
        <button
          onClick={handleAddComment}
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
        >
          Add Comment
        </button>
      </div>
    </div>
  );
};

export default CommentsSection;
