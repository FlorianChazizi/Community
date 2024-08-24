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
    <div className="p-8 m-8 max-w-3xl mx-auto bg-white rounded shadow-md">
      <h1 className="text-3xl font-bold mb-4 text-center">{community.c_name}</h1>
      <p className="text-lg mb-8 text-center">{community.c_description}</p>

      <div className="flex justify-center gap-8">
        {/* Admin Section */}
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold mb-2 text-center">Admin</h2>
          <ul className="flex flex-col items-center">
            {community.c_admins.map((admin) => (
              <li key={admin._id} className="text-xl bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 rounded-lg p-1 text-white">{admin.username}</li>
            ))}
          </ul>
        </div>

        {/* Members Section */}
        <div className="w-1/2">
          <h2 className="text-2xl font-semibold mb-2 text-center">Members</h2>
          <ul className="flex flex-wrap justify-center gap-4">
            {community.c_members.map((member) => (
              <li key={member._id} className="text-xl bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 rounded-lg p-1 text-white">{member.username}</li>
            ))}
          </ul>

        </div>

      </div>
      <div className='flex items-center justify-center h-full'>
      {!isMember && (
            <button
              className="my-4 px-4 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700"
              onClick={joinCommunity}
              disabled={joinLoading}
            >
              {joinLoading ? 'Joining...' : 'Join Community'}
            </button>
          )}
        </div>

      {/* Post Form and Post List */}
      {isMember && (
        <div className="mt-8">
          <PostForm
            postTitle={postTitle}
            postContent={postContent}
            setPostTitle={setPostTitle}
            setPostContent={setPostContent}
            createPost={createPost}
            postError={postError}
          />
        </div>
      )}
      <PostList posts={posts} />
    </div>
  );
};

export default CommunityPage;
