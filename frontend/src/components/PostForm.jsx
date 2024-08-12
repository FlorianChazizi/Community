const PostForm = ({
  postTitle,
  postContent,
  setPostTitle,
  setPostContent,
  createPost,
  postError,
}) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Create a Post</h2>
      <form onSubmit={createPost}>
        <div className="mb-4">
          <label htmlFor="postTitle" className="block text-lg font-medium mb-1">
            Title
          </label>
          <input
            id="postTitle"
            type="text"
            className="w-full border rounded px-3 py-2"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="postContent" className="block text-lg font-medium mb-1">
            Content
          </label>
          <textarea
            id="postContent"
            className="w-full border rounded px-3 py-2"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
        >
          Submit Post
        </button>
      </form>
      {postError && <div className="text-red-500 mt-2">{postError}</div>}
    </div>
  );
};

export default PostForm;
