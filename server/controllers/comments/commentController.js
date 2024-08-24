const Comment = require('../../models/commentModel');
const Post = require('../../models/postModel');

// Create a new comment
const createComment = async (req, res) => {
  const { c_user_id, c_post_id, c_content } = req.body;

  console.log('c_user_id:', c_user_id);
  console.log('c_post_id:', c_post_id);
  console.log('c_content:', c_content);
  
  if (!c_user_id || !c_post_id || !c_content) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const comment = new Comment({
      c_user_id,
      c_post_id,
      c_content,
    });

    await comment.save();

    res.status(201).json(comment);
  } catch (error) {
    res.status(400).json({ error: 'Could not create comment', details: error.message });
  }
};

// Get comments for a specific post
const getCommentsByPost = async (req, res) => {
  const { postId } = req.params;

  try {
    const comments = await Comment.find({ c_post_id: postId })
      .populate('c_user_id', 'username')
      .lean();

    res.status(200).json(comments);
  } catch (error) {
    res.status(404).json({ error: 'Comments not found', details: error.message });
  }
};

// Like a comment
const likeComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    // Check if the user already liked the comment
    if (comment.c_likes.includes(req.user._id)) {
      return res.status(400).json({ error: 'You have already liked this comment' });
    }

    // Add the user's ID to the likes array
    comment.c_likes.push(req.user._id);

    await comment.save();
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ error: 'Could not like comment', details: error.message });
  }
};

// Unlike a comment
const unlikeComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ error: 'Comment not found' });
    }

    // Check if the user already liked the comment
    if (!comment.c_likes.includes(req.user._id)) {
      return res.status(400).json({ error: 'You have not liked this comment' });
    }

    // Remove the user's ID from the likes array
    comment.c_likes = comment.c_likes.filter(userId => userId.toString() !== req.user._id.toString());

    await comment.save();
    res.status(200).json(comment);
  } catch (error) {
    res.status(400).json({ error: 'Could not unlike comment', details: error.message });
  }
};

module.exports = {
  createComment,
  getCommentsByPost,
  likeComment,
  unlikeComment,
};
