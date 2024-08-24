import React from 'react';
import CommentsSection from './CommentSection';


const PostList = ({ posts }) => {


  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Posts</h2>
      {posts.length > 0 ? (
        posts.map(post => (
          <div key={post._id} className="mb-4 border rounded p-4 hover:shadow-md">
            <h3 className="text-xl font-bold">{post.p_title}</h3>
            <p className="text-lg">{post.p_content}</p>
            <p className="text-sm text-gray-500">Posted by {post.p_user_id.username}</p>
            <hr className='m-5'></hr>
            {/* Comments Section */}
            <CommentsSection postId={post._id} />
          </div>
        ))
      ) : (  
        <p>No posts yet. Be the first to post!</p>
      )}
    </div>
  );
};
export default PostList;
