const express = require('express');
const router = express.Router();
const { createComment, getCommentsByPost, likeComment, unlikeComment } = require('../controllers/comments/commentController');
const requireAuth = require('../middleware/authentication')

// Protect all comment routes
router.use(requireAuth);

// Create a new comment
router.post('/', createComment); 

// Get all comments for a specific post
router.get('/:postId', getCommentsByPost); 

// // Like a comment
// router.post('/:commentId/like', likeComment);

// // Unlike a comment
// router.post('/:commentId/unlike', unlikeComment);

module.exports = router;