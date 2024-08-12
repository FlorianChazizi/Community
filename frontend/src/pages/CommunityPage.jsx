// src/components/CommunityPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useCommunityData } from '../hooks/useCommunityData';
import { usePosts } from '../hooks/usePosts';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';

const CommunityPage = () => {
  const { communityName } = useParams();
  const { user } = useAuthContext();

  const {
    community,
    loading,
    error,
    isMember,
    joinLoading,
    joinCommunity,
  } = useCommunityData(communityName, user);

  const {
    posts,
    postTitle,
    postContent,
    postError,
    setPostTitle,
    setPostContent,
    createPost,
  } = usePosts(communityName, user);

  if (loading) {
    return <div>Loading community details...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!community) {
    return <div>Community not found</div>;
  }

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4">{community.c_name}</h1>
      <p className="text-lg mb-4">{community.c_description}</p>
      <div>
        <h2 className="text-2xl font-semibold mb-2">Admin</h2>
        <ul>
          {community.c_admins.map((admin) => (
            <li key={admin._id} className="text-xl">{admin.username}</li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-semibold mb-2">Members</h2>
        <ul>
          {community.c_members.map((member) => (
            <li key={member._id} className="text-xl">{member.username}</li>
          ))}
        </ul>
        {!isMember && (
          <button
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700"
            onClick={joinCommunity}
            disabled={joinLoading}
          >
            {joinLoading ? 'Joining...' : 'Join Community'}
          </button>
        )}
      </div>
      {isMember && (
        <PostForm
          postTitle={postTitle}
          postContent={postContent}
          setPostTitle={setPostTitle}
          setPostContent={setPostContent}
          createPost={createPost}
          postError={postError}
        />
      )}
      <PostList posts={posts} />
    </div>
  );
};

export default CommunityPage;
